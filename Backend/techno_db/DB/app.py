from flask import Flask,  request, jsonify 
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS 

app = Flask(__name__)

CORS(app)


app.config['SQLALCHEMY_DATABASE_URI']='mysql+mysqlconnector://root:clave@localhost:3306/productos_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False

db= SQLAlchemy(app)


# defino la tabla
class Notebook(db.Model):   # la clase Producto hereda de db.Model    
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    modelo=db.Column(db.String(100))
    precio=db.Column(db.Integer)
    cantidad=db.Column(db.Integer)
    descripcion=db.Column(db.String(500))
    imagen=db.Column(db.String(400))
    def __init__(self,modelo,precio,cantidad,descripcion,imagen):   #crea el  constructor de la clase
        self.modelo=modelo   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.precio=precio
        self.cantidad=cantidad
        self.descripcion=descripcion
        self.imagen=imagen


with app.app_context():
    db.create_all() 


#crear ruta de acceso 
@app.route("/")
def index():
    return f'App Web para registrar nombre de productos'


@app.route('/registro', methods=['POST']) # crea ruta o endpoint
def registro():
    modelo=request.json['modelo']
    precio=request.json['precio']
    cantidad=request.json['cantidad']
    descripcion=request.json['descripcion'] 
    imagen=request.json['imagen']

    new_producto = Notebook(modelo=modelo,precio=precio,cantidad=cantidad,descripcion=descripcion,imagen=imagen)
    db.session.add(new_producto)
    db.session.commit()

    return 'Solicitud de post recibida'


@app.route('/productos',methods=['GET'])
def productos():
    all_registros = Notebook.query.all()

    data_serializada = []
    
    for objeto in all_registros:
        data_serializada.append({"id":objeto.id, "modelo":objeto.modelo, "precio":objeto.precio, "cantidad":objeto.cantidad, "descripcion":objeto.descripcion, "imagen":objeto.imagen})

    return jsonify(data_serializada)  # retorna el JSON de un producto recibido como parámetro


@app.route('/update/<id>', methods=['PUT'])
def update(id):
    registro = Notebook.query.get(id)

    modelo=request.json['modelo']
    precio=request.json['precio']
    cantidad=request.json['cantidad']
    descripcion=request.json['descripcion']
    imagen=request.json['imagen']


    registro.modelo=modelo
    registro.precio=precio
    registro.cantidad=cantidad
    registro.descripcion=descripcion
    registro.imagen=imagen


    db.session.commit()

    data_serializada = [{'id': registro.id, 'modelo': registro.modelo, 'cantidad': registro.cantidad, 'descripcion': registro.descripcion, 'imagen': registro.imagen}]

    return jsonify(data_serializada)

@app.route('/delete/<id>',methods=['DELETE'])
def delete(id):
    registro=Notebook.query.get(id)

    db.session.delete(registro)
    db.session.commit()


    data_serializada = [{'id': registro.id, 'modelo': registro.modelo, 'cantidad': registro.cantidad, 'descripcion': registro.descripcion, 'imagen': registro.imagen}]

    return jsonify(data_serializada) 


if __name__=='__main__':  
    app.run(debug=True)    # ejecuta el servidor Flask en el puerto 5000