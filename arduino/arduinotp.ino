int ledPin = 5;
int photoResistorPin = A0;
bool high = true;

void setup() {
    // put your setup code here, to run once:
    pinMode(ledPin, OUTPUT);
    Serial.begin(9600);
}

void loop() {
    delay(500);
    Serial.print((int) analogRead(photoResistorPin));
    Serial.print(":");
    Serial.println(high ? 1 : 0);
    if (Serial.available() > 0) {
        char serial = Serial.read(); 
        if (serial == 'H') {
            high = true;
        }
        else if (serial == 'L') {
            high = false;
        }
    }

    if (high) {
        digitalWrite(ledPin, LOW);
        delay(200);
        digitalWrite(ledPin, HIGH);
    }
    else {
        digitalWrite(ledPin, HIGH);
        delay(200);
        digitalWrite(ledPin, LOW);
    }
}
 
