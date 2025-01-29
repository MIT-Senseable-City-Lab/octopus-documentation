---
sidebar_label: '🔌 Octopus API'
sidebar_position: 4
---

# 🔌 Octopus API

---

The Octopus Arduino Library gives you a variety of methods to use on the octoous-object to modify its behaviour. The overview is found below.

To use this library:
`#include <Octopus.h>`

:::info

The library source files can be found in GitHub: https://github.com/MIT-Senseable-City-Lab/octopus-fabrication/tree/main/firmware

:::


## Methods

### Public Class Octopus:

<details>
    <summary><strong>initializeSensors()</strong>: Sets up all connected sensors with default calibration values</summary> 
    <p>Parameters </p>
    <p>None</p>
    <p>Returns</p>
    <p>1 on success, 0 on failure</p>
    <p>Example</p>
    ```py
    if (!Octopus::initializeSensors()) {
        Serial.println("Failed to initialize Sensors!");
        while (1);
    }
    ``` 
</details>

<details>
    <summary><strong>setInterval(long interval)</strong>: sets the interval for data logging</summary>
    <p><strong>Parameters</strong></p>
    <p>long interval</p>
    <p><strong>Returns</strong></p>
    <p>-</p>
    <p><strong>Example</strong></p>
    ```py
    Octopus::setInterval(5000) // sets the interval for data logging to 5 seconds
    ```
</details>

<details>
    <summary><strong>start()</strong>: Begins continuous reading of all sensors</summary>
    <p><strong>Parameters</strong></p>
    <p>None</p>
    <p><strong>Returns</strong></p>
    <p>1 on success, 0 on failure</p>
    <p><strong>Example</strong></p>
    ```py
    if (!Octopus::start()) {
        Serial.println("Failed to start data collection!");
        while (1);
    }
    ```
</details>

<details>
    <summary><strong>readTemperature()</strong>: Returns the current temperature reading</summary>
    <p><strong>Parameters</strong></p>
    <p>None</p>
    <p><strong>Returns</strong></p>
    <p>Temperature (float) on on success, 0 on failure</p>
    <p><strong>Example</strong></p>
    ```py
    Serial.print("Temperature = ");
    Serial.print(Octopus::readTemperature());
    Serial.println(" °C");
     ```
</details>

<details>
    <summary><strong>readHumidity()</strong>: Returns the current humidity level</summary>
    <p><strong>Parameters</strong></p>
    <p>None</p>
    <p><strong>Returns</strong></p>
    <p>Humidity (float) on success, 0 on failure</p>
    <p><strong>Example</strong></p>
    ```py
    Serial.print("Humidity = ");
    Serial.print(Octopus::readHumidity());
    Serial.println(" %");
     ```
</details>

**SPS30 Functions**

<details>
    <summary><strong>initializeSPS30()</strong>: Initializing the SPS30 sensor</summary>
    <p><strong>Parameters</strong></p>
    <p>None</p>
    <p><strong>Returns</strong></p>
    <p>1 on on success, 0 on failure</p>
    <p><strong>Example</strong></p>
    ```py
    // Sensor availability flags
    bool sps30Available = false;

    sps30Available = Octopus::initializeSPS30();
     ```
</details>

<details>
    <summary><strong>readSPS30Data(float pm1_0, float pm2_5, float pm4_0, float pm10_0)</strong>: Function for reading SPS30 data</summary>
    <p><strong>Parameters</strong></p>
    <p>- float pm1_0: variable to save PM1.0 value</p>
    <p>- float pm2_5: variable to save PM2.5 value</p>
    <p>- float pm4_0: variable to save PM4.0 value</p>
    <p>float pm10_0: variable to save PM10 value</p>
    <p><strong>Returns</strong></p>
    <p>1 on on success, 0 on failure</p>
    <p><strong>Example</strong></p>
    ```py
    // Read SPS30 data if available
    float pm1_0 = 0, pm2_5 = 0, pm4_0 = 0, pm10_0 = 0;
    if (sps30Available) {
        if (!Octopus::readSPS30Data(pm1_0, pm2_5, pm4_0, pm10_0)) {
            Serial.println("Failed to read SPS30 data");
        }
    }
     ```
</details>

<details>
    <summary><strong>stopSPS30()</strong>: Stop the SPS30 sensor</summary>
    <p><strong>Parameters</strong></p>
    <p>None</p>
    <p><strong>Returns</strong></p>
    <p>1 on on success, 0 on failure</p>
    <p><strong>Example</strong></p>
    ```py
    if (sps30Available) {
        Octopus::stopSPS30();
    }
     ```
</details>

**GPS Functions**

<details>
    <summary><strong>initializeGPS()</strong>: Initialize GPS</summary>
    <p><strong>Parameters</strong></p>
    <p>None</p>
    <p><strong>Returns</strong></p>
    <p>1 on on success, 0 on failure</p>
    <p><strong>Example</strong></p>
    ```py
    // Sensor availability flags
    bool gpsAvailable = false;
    
    gpsAvailable = Octopus::initializeGPS();
     ```
</details>

<details>
    <summary><strong>readGPSData(float latitude, float longitude, float altitude)</strong>: Read GPS data</summary>
    <p><strong>Parameters</strong></p>
    <p>- float latitude: variable to save latitude</p>
    <p>- float longitude: variable to save longitude</p>
    <p>- float altitude: variable to save altitude</p>
    <p><strong>Returns</strong></p>
    <p>1 on on success, 0 on failure</p>
    <p><strong>Example</strong></p>
    ```py
    // Read GPS data if available
    float latitude = 0, longitude = 0, altitude = 0;
    if (gpsAvailable) {
        if (!Octopus::readGPSData(latitude, longitude, altitude)) {
            Serial.println("Failed to read GPS data");
        }
    }
     ```
</details>

<details>
    <summary><strong>getGPSTime()</strong>: Get GPS time as a string</summary>
    <p><strong>Parameters</strong></p>
    <p>None</p>
    <p><strong>Returns</strong></p>
    <p>GPS time as a string on on success, "0.00" on failure</p>
    <p><strong>Example</strong></p>
    ```py
    // Get GPS time if available
    String gpsTime = "N/A";
    if (gpsAvailable) {
        gpsTime = Octopus::getGPSTime();
    }
     ```
</details>


### Battery and LED control functions

<details>
    <summary><strong>initBatteryMonitoring()</strong>: Set LED up for use, ensuring its ready to display battery-related information through color changes</summary>
    <p><strong>Parameters</strong></p>
    <p>None</p>
    <p><strong>Returns</strong></p>
    <p>-</p>
    <p><strong>Example</strong></p>
    ```py
    // If start-button is pressed, monitor battery and initialize SPS30
    if (buttonPressTime != 0) {
        if (!longPressHandled) {
            deviceOn = true;
            Serial.println("Device turned on");
            initSD(RECORDS_PER_FILE);
            initBatteryMonitoring();
            if (sps30Available) {
                Octopus::initializeSPS30();
            }
        }
     ```
</details>

<details>
    <summary><strong>setDotStarColor((uint8_t r, uint8_t g, uint8_t b)</strong>: Adjusts the RGB LED color based on provided red, green, and blue values</summary>
    <p>Note that this only changes one of the LEDs as the other one is configured to provide information on battery levels (turn red if battery is low).</p>
    <p><strong>Parameters</strong></p>
    <p>- uint8_t r: variable to indicate level of RED in the LED, values between 0-255 is valid.</p>
    <p>- uint8_t g: variable to indicate level of GREEN in the LED, values between 0-255 is valid.</p>
    <p>- uint8_t b: variable to indicate level of BLUE in the LED, values between 0-255 is valid.   </p>
    <p><strong>Returns</strong></p>
    <p>-</p>
    <p><strong>Example</strong></p>
    ```py
    void loop() {
        setDotStarColor(0, 0, 255); // LED set to BLUE
        delay(500);
        setDotStarColor(0, 255, 0); // LED set to GREEN
        delay(500);
        setDotStarColor(255, 0, 0); // LED set to RED
        delay(500);
    }
    ```
</details>

<details>
    <summary><strong>calculateBatteryPercentage(float voltage)</strong>: Returns the current battery level as a percentage</summary>
    <p><strong>Parameters</strong></p>
    <p>float voltage</p>
    <p><strong>Returns</strong></p>
    <p>float: Current battery presentage calculated</p>
    <p><strong>Example</strong></p>
    ```py
    // Battery monitoring and RGB LED control
    const int vbatPin = A0;         
    const int chargeStatePin = 7; 

    int vbatRaw = analogRead(vbatPin);
    float vbatVoltage = vbatRaw * (3.294 / 1023.0) * 1.279;
    bool chargeState = digitalRead(chargeStatePin);
    bool batteryConnected = vbatVoltage > 2.5;
    float batteryPercentage = batteryConnected ? calculateBatteryPercentage(vbatVoltage) : 0.0;
     ```
</details>

### Functions for SD Card Handling

<details>
    <summary><strong>initSD(int recordsPerFile)</strong>: Init SD card and set records per file</summary>
    <p><strong>Parameters</strong></p>
    <p>- int recordsPerFile: number of records per file stored to SD card</p>
    <p><strong>Returns</strong></p>
    <p>-</p>
    <p><strong>Example</strong></p>
    ```py
    deviceOn = true;
    Serial.println("Device turned on");
    initSD(RECORDS_PER_FILE);
    ```
</details>

<details>
    <summary><strong>logToSD()</strong>: data logging if you are logging to SD card</summary>
    <p><strong>Parameters</strong></p>
    <p>String</p>
    <p><strong>Returns</strong></p>
    <p>-</p>
    <p><strong>Example</strong></p>
    ```py
     // Log the data (Include placeholders or skip the SPS30 values if not available)
    String data = gpsTime + "," + String(latitude, 7) + "," + String(longitude, 7) + "," + temperature + "," + humidity;
    if (sps30Available) {
        data += "," + String(pm1_0) + "," + String(pm2_5) + "," + String(pm4_0) + "," + String(pm10_0);
    } else {
        data += ",N/A,N/A,N/A,N/A";  // Placeholder if SPS30 data is unavailable
    }
    logToSD(data);
    ```
</details>




