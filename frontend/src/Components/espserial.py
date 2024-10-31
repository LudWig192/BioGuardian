import serial
from sql import banco
#from insert_bd import insert,update_state,check_exi


ser = serial.Serial('COM4', 115200)
var_com = ''
var_teste = ''
while True:
    #######################################################################
    while True:
        var = str(ser.read(1))
        var_com = str(var_com+var)

        if var == "b\'\\n\'":
            break
    var_com = var_com.replace("b\'", '').replace("\'", '').replace("\\r", '').replace("\\n", '')

    ############################################################################
    print(var_com)
    banco(int(var_com),1)
    var_com = ''

    # if (check_exi("banco.db","ESP","DADO_LIDO",var_com)) == True:
    #     update_state("banco.db","ESP",var_com)
    #     print("Objeto atualizado no BD")
    # else:
    #     insert("banco.db", "ESP", var_com, "aaaaa")
    #     print("Objeto cadastrado no BD")
