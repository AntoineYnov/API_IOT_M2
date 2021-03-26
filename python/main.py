import serial
import requests

api_url = "http://localhost:3000"


def send_to_api(data):
    requests.post(api_url + "/", data={"value": data})


with serial.Serial('/dev/ttyUSB0', 9600, timeout=10) as ser:
    print("Start")
    while True:
        data = ser.readline().decode("utf-8")
        # send_to_api(1000 - int(data.split(":")[0]))
        print(data)