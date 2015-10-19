from flask import Flask,render_template
from flask import request
app = Flask(__name__)

@app.route("/")
def index():
	return render_template('index.html')

@app.route("/user/<name>")
def user(name):
	return render_template('user.html',name=name)

@app.route("/webDemo/threejs1")
def threejs_demo1():
	return render_template('webDemo/threejs1.html')


if __name__=="__main__":	
	app.run()
