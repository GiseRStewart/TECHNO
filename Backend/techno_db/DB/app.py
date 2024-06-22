from flask import Flask,  request, jsonify 
# del modulo flask importar la clase Flask y los métodos jsonify,request
from flask_cors import CORS       # del modulo flask_cors importar CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app=Flask(__name__)  # crear el objeto app de la clase Flask
CORS(app) #modulo cors es para que me permita acceder desde el frontend al backend


# configuro la base de datos, con el nombre el usuario y la clave
app.config['SQLALCHEMY_DATABASE_URI']='mysql+mysqlconnector://root:Zoraida2014*@localhost:3306/productos_db'
# URI de la BBDD                          driver de la BD  user:clave@URLBBDD/nombreBBDD
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False #none
db= SQLAlchemy(app)   #crea el objeto db de la clase SQLAlquemy
ma=Marshmallow(app)   #crea el objeto ma de de la clase Marshmallow


# defino la tabla
class notebook(db.Model):   # la clase Producto hereda de db.Model    
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





    #  si hay que crear mas tablas , se hace aqui




with app.app_context():
    db.create_all()  # aqui crea todas las tablas
#  ************************************************************
class NotebookSchema(ma.Schema):
    class Meta:
        fields=('id','modelo','precio','cantidad','descripcion','imagen')




notebook_schema=NotebookSchema()            # El objeto producto_schema es para traer un producto
notebooks_schema=NotebookSchema(many=True)  # El objeto productos_schema es para traer multiples registros de producto



#crear ruta de acceso 
@app.route("/")
def index():
    return f'App Web para registrar nombre de productos'

# crea los endpoint o rutas (json)
# @app.route('/registros',methods=['GET'])
# def get_registro():
#      all_registro=registro.query.all()         # el metodo query.all() lo hereda de db.Model
#      result=notebook_schema.dump(all_registro)  # el metodo dump() lo hereda de ma.schema y
#                                                 # trae todos los registros de la tabla
#      return jsonify(result)                       # retorna un JSON de todos los registros de la tabla




@app.route('/notebooks',methods=['GET'])
def get_notebooks():
    registro=registro.query.get(id)
    return notebook_schema.jsonify(registro)   # retorna el JSON de un producto recibido como parametro




@app.route('/registros/<id>',methods=['DELETE'])
def delete_registro(id):
    registro=registro.query.get(id)
    db.session.delete(registro)
    db.session.commit()
    return notebook_schema.jsonify(registro)   # me devuelve un json con el registro eliminado


@app.route('/registro', methods=['POST']) # crea ruta o endpoint
def registro():
    #print(request.json)  # request.json contiene el json que envio el cliente
    modelo=request.json['modelo']
    precio=request.json['precio']
    cantidad=request.json['cantidad']
    descripcion=request.json['descripcion']
    imagen=request.json['imagen']

    new_producto=notebook(modelo=modelo,precio=precio,cantidad=cantidad,descripcion=descripcion,imagen=imagen)
    db.session.add(new_producto)
    db.session.commit()
    return notebook_schema.jsonify(new_producto)


@app.route('/registros/<id>' ,methods=['PUT'])
def update_registro(id):
    registro=registro.query.get(id)
 
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
    return notebook_schema.jsonify(registro)
 


# programa principal *******************************
if __name__=='__main__':  
    app.run(debug=True, port=5000)    # ejecuta el servidor Flask en el puerto 5000