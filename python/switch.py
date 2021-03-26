import serial
import requests

api_url = "http://localhost:3000"


def send_switch_request(data):
    print(data)
    status = "HIGH" if data == 1 else "LOW"

    res = requests.post(api_url + "/led", data={"value": status})
    print(res.text)
    return res.text


with serial.Serial('/dev/ttyUSB0', 9600, timeout=.1) as ser:
    print("Start")
    while True:
        data = ser.readline().decode("utf-8")
        if len(data.split(":")) < 2:
            print(data)
            continue
        
        #ser.write('L'.encode())
        ser.write(send_switch_request(int(data.split(":")[1])).encode())
        break
