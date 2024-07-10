from flask import Flask,  request, jsonify 
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS 

app = Flask(__name__)

CORS(app)


app.config['SQLALCHEMY_DATABASE_URI']='mysql+mysqlconnector://technopower:Zoraida2014*@technopower.mysql.pythonanywhere-services.com/technopower$default'
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
        self.modelo=modelo  
        self.precio=precio
        self.cantidad=cantidad
        self.descripcion=descripcion
        self.imagen=imagen


class user(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    nombre=db.Column(db.String(100))
    apellido=db.Column(db.String(100))
    usuario=db.Column(db.String(100))
    contraseña=db.Column(db.String(100))
    rol=db.Column(db.String(100), default='')
    email=db.Column(db.String(100))
    def __init__(self, nombre, apellido, usuario, contraseña, rol, email):
        self.nombre=nombre
        self.apellido=apellido
        self.usuario=usuario
        self.contraseña=contraseña
        self.rol=rol
        self.email=email

        
with app.app_context():
    db.create_all() 


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


#REGISTRO DE USUARIO

@app.route('/registroUsuario', methods=['POST']) # crea ruta o endpoint
def registroUsuario():
    nombre=request.json['nombre']
    apellido=request.json['apellido']
    usuario=request.json['usuario']
    email=request.json['email']
    rol = request.json.get('rol', '')
    contraseña=request.json['contraseña']

    new_user = user(nombre=nombre,apellido=apellido,usuario=usuario,email=email,rol=rol, contraseña=contraseña)
    db.session.add(new_user)
    db.session.commit()

    return 'Solicitud de post recibida'

@app.route('/usuarios',methods=['GET'])
def usuarios():
    all_registros = user.query.all()

    data_serializada = []
    
    for objeto in all_registros:
        data_serializada.append({"id":objeto.id, "nombre":objeto.nombre, "apellido":objeto.apellido, "usuario":objeto.usuario, "email":objeto.email,"rol":objeto.rol, "contraseña":objeto.contraseña})

    return jsonify(data_serializada)

@app.route('/actualizarUsuario/<id>', methods=['PUT'])
def actualizarUsuario(id):
    registro = user.query.get(id)

    nombre=request.json['nombre']
    apellido=request.json['apellido']
    usuario=request.json['usuario']
    email=request.json['email']
    rol=request.json['rol']
    contraseña=request.json['contraseña']


    registro.nombre=nombre
    registro.apellido=apellido
    registro.usuario=usuario
    registro.email=email
    registro.rol=rol
    registro.contraseña=contraseña

    db.session.commit()

    data_serializada = [{"id":registro.id, "nombre":registro.nombre, "apellido":registro.apellido, "usuario":registro.usuario, "email":registro.email,"rol":registro.rol, "contraseña":registro.contraseña}]

    return jsonify(data_serializada)

@app.route('/borrarUsuario/<id>',methods=['DELETE'])
def borrarUsuario(id):
    registro=user.query.get(id)

    db.session.delete(registro)
    db.session.commit()


    data_serializada = [{"id":registro.id, "nombre":registro.nombre, "apellido":registro.apellido, "usuario":registro.usuario, "email":registro.email,"rol":registro.rol, "contraseña":registro.contraseña}]

    return jsonify(data_serializada) 

@app.route('/login', methods=['POST'])
def login():
    usuario = request.json.get('usuario')
    contraseña = request.json.get('contraseña')

    user = user.query.filter_by(usuario=usuario, contraseña=contraseña).first()
    if user:
        return jsonify({
            "status": "success",
            "message": "Login exitoso",
            "data": {
                "id": user.id,
                "usuario": user.usuario,
                "rol": user.rol
            }
        }), 200
    else:
        return jsonify({
            "status": "error",
            "message": "Usuario o contraseña incorrectos"
        }), 401


if __name__=='__main__':  
    app.run(debug=True)    # ejecuta el servidor Flask en el puerto 5000