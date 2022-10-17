

from flask import Flask,render_template


import psycopg2


# Create an instance of Flask
app=Flask(__name__,template_folder='templates')

# Establish connection to Postgresql database

def get_db_connection():
    conn = psycopg2.connect(database="project3_db",
                            user="postgres",
                            password="Kouassi1989",
                            host="localhost",
                            port= 5432
                            )
    return conn

#------------------------------------------------------------
# Web site
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/data")
def data():
    conn = get_db_connection()
    cur = conn.cursor()
    str(cur.execute("SELECT * FROM checking"))

    dt = cur.fetchall()

    print(dt)

    

    return render_template("data.html")

@app.route("/tableau")
def tableau():
    return render_template("tableau.html")

#-----------------------------------------------------------    

#@app.route("/income", methods=[ 'get'])
#def Inc():  
    #cursor.execute("select * from Income")
    #result = cursor.fetchall()
    #print(result)
    #return render_template("", data=result)
    #return jsonify(result)



if __name__ == "__main__":
    app.run(debug=True)