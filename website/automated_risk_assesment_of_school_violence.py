from flask import Flask, render_template, request, redirect, session
from flask_mysqldb import MySQL
import joblib
import MySQLdb.cursors
app = Flask(__name__)
app.secret_key = 'xyzsdfg'
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'user-system'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)
@app.route('/', methods=['GET','POST'])
def home():
    return render_template('login.html')
@app.route('/result')
def view_res():
    cursor = mysql.connection.cursor()
    cursor.execute('SELECT ch.result , ch.f_name , ch.l_name FROM ch INNER JOIN pa ON pa.ssn = ch.p_ssn')
    results = cursor.fetchall()
    cursor.close()
    return render_template('result.html', results=results)
@app.route('/register_c', methods=['POST'])
def register_child():
    c_first_name = request.form['fregname']
    c_last_name = request.form['lregname']
    c_email = request.form['regemail']
    c_gender = request.form['reggender']
    c_password = request.form['regpass']
    c_date_of_birth = request.form['regdate']
    c_parent_ssn = request.form['regparentssn']
    cur = mysql.connection.cursor()
    cur.execute(
        "INSERT INTO ch (f_name,l_name,email,gender,password,date,p_ssn) VALUES (%s, %s, %s, %s, %s, %s, %s)",
        (c_first_name, c_last_name, c_email, c_gender, c_password, c_date_of_birth,  c_parent_ssn)
    )
    mysql.connection.commit()
    cur.close()
    session['c_first_name'] = c_first_name
    session['c_last_name'] = c_last_name
    session['c_email'] = c_email
    session['c_password'] = c_password
    session['c_ssn'] = c_parent_ssn
    return redirect('/survey')
@app.route('/survey')
def survey():
    return render_template('survey.html')
@app.route('/register_p', methods=['POST'])
def register_parent():
    p_first_name = request.form['fregname']
    p_last_name = request.form['lregname']
    p_email = request.form['regemail']
    p_password = request.form['regpass']
    p_parent_ssn = request.form['regparentssn']
    cur = mysql.connection.cursor()
    cur.execute(
        "INSERT INTO pa (f_name,l_name,email,password,ssn) VALUES (%s, %s, %s, %s, %s)",
        (p_first_name, p_last_name, p_email, p_password,  p_parent_ssn)
    )
    mysql.connection.commit()
    cur.close()
    session['p_first_name'] = p_first_name
    session['p_last_name'] = p_last_name
    session['p_email'] = p_email
    session['p_password'] = p_password
    session['p_ssn'] = p_parent_ssn
    return redirect('/')
@app.route('/profile')
def profile():
    if 'p_loggedin' in session:
        p_first_name = session['p_first_name']
        p_last_name = session['p_last_name'] 
        p_email = session['p_email']
        p_password = session['p_password']
        p_parent_ssn = session['p_ssn']
        return render_template('profile.html',p_first_name=p_first_name,p_last_name=p_last_name,p_email=p_email,p_password=p_password,p_parent_ssn=p_parent_ssn)
@app.route('/predict', methods=['get'])
def predict():
    question1 = request.args.get('question1')
    if(question1 == 'yes'):
        question1 = 2.5
    else:
        question1 = 1

    question2 = request.args.get('question2')
    if(question2 == 'yes'):
        question2 = 2
    else:
        question2 = 1

    question3 = request.args.get('question3')
    if(question3 == 'yes'):
        question3 = 1
    else:
        question3 = 2

    question4 = request.args.get('question4')
    if(question4 == 'yes'):
        question4 = 2.5
    else:
        question4 = 1

    question5 = request.args.get('question5')
    if(question5 == 'yes'):
        question5 = 2
    else:
        question5 = 1

    question6 = request.args.get('question6')
    if(question6 == 'yes'):
        question6 = 3
    else:
        question6 = 1

    question7 = request.args.get('question7')
    if(question7 == 'yes'):
        question7 = 2
    else:
        question7 = 1

    question8 = request.args.get('question8')
    if(question8 == 'yes'):
        question8 = 3
    else:
        question8 = 1

    question9 = request.args.get('question9')
    if(question9 == 'yes'):
        question9 = 1.5
    else:
        question9 = 1

    question10 = request.args.get('question10')
    if(question10 == 'yes'):
        question10 = 2
    else:
        question10 = 1

    question11 = request.args.get('question11')
    if(question11 == 'whiteweapon'):
        question11 = 3

    elif question11 == 'brick':
        question11 = 2
    else:
        question11 = 1

    question12 = request.args.get('question12')
    if(question12 == 'yes'):
        question12 = 1
    else:
        question12 = 1.5

    question13 = request.args.get('question13')
    if(question13 == 'Uneducated'):
        question13 = 2

    elif question13 == 'universityeducation':
        question13 = 0.5

    elif question13 == "highschool":
        question13 = 1

    else:
        question13 = 1.5

    userInput = [[question1, question2, question3, question4, question5, question6,
                 question7, question8, question9, question10, question11, question12, question13]]

    model = joblib.load('Logistic_regression.h5')
    prediction = model.predict(userInput)
    if prediction == 3 :
        cs = "high"
    else :
        cs = "low"
    import pymysql
    db = pymysql.connect(host='localhost', user='root', password='', db='user-system')
    cursor = db.cursor()
    query = "UPDATE ch SET result = (%s) WHERE email = (%s)"
    cursor.execute(query, (cs,session["c_email"]))
    db.commit()
    cursor.close()
    db.close()
    return render_template('login.html')
@app.route('/login', methods=['GET', 'POST'])
def login():
    message = ''
    if request.method == 'POST' and 'email' in request.form and 'password' in request.form:
        email = request.form['email']
        password = request.form['password']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM ch WHERE email = %s AND password = %s', (email, password))
        user = cursor.fetchone()
        if not user:
            cursor.execute('SELECT * FROM pa WHERE email = %s AND password = %s', (email, password))
            user = cursor.fetchone()

            if user:
                session['p_loggedin'] = True
                session['p_first_name'] = user['f_name']
                session['p_last_name'] = user['l_name']
                session['p_email'] = user['email']
                session['p_password'] = user['password']
                session['p_ssn'] = user['ssn']
                return redirect('/main')
        if user:
            session['c_loggedin'] = True
            session['c_email'] = user['email']
            return redirect('/survey')
        else:
            message = 'Please enter correct email/password!'
    
    return render_template('login.html', message=message)
@app.route('/logout')
def logout():
    session.pop('p_loggedin', None)
    session.pop('p_email', None)
    return redirect('/login')
@app.route('/main')
def main():
    return render_template('parentDashboard.html')
if __name__ == '__main__':
    app.run(debug=True, port=8610)