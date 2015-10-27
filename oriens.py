from flask import Flask,render_template
from flask import request
app = Flask(__name__)

@app.route("/")
def index():
	return render_template('new.html')

@app.route("/version1")
def old_index_1():
	return render_template('index.html')


@app.route("/webDemo/threejs1")
def threejs_demo1():
	return render_template('webDemo/threejs1.html')

@app.route("/webDemo/threejs2")
def threejs_demo2():
	return render_template('webDemo/threejs2_white_rect.html')

@app.route("/webDemo/threejs3")
def threejs_demo3():
	return render_template('webDemo/threejs3_rotate3dcube_withpic.html')

@app.route("/webDemo/rgb20x")
def rgb20x():
	return render_template('webDemo/rgb20x.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__=="__main__":	
	app.run()
