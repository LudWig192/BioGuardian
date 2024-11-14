import mysql.connector

def banco(dado,device):
    cnx = mysql.connector.connect(user='arduino', password='Senai123',
                                  localhost='10.84.22.2',
                                  database='arduino')

    cursor = cnx.cursor()

    comando = ("INSERT INTO bpm (batimento,device) VALUES (%s,%s)")
    cursor.execute(comando,(dado,device))
    cnx.commit()

    cnx.close()
