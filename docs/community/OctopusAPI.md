---
sidebar_position: 2
---

# 🔌 Octopus API

---

The Octopus Arduino Library gives you a variety of methods to use on the octoous-object to modify its behaviour. The overview is found below.

To use this library:
`#include <Octopus.h>`

The Octopus library takes care of the sensor initialization and sets its values as follows:

_example_

* Absolute pressure range: 260 to 1260 hPa.
* Humidity range: 0 to 100% relative humidity (rH).
* Humidity accuracy: ± 3.5% rH, 20 to +80% rH.
* Temperature range -40 to 120 °C.
* Temperature accuracy: ± 0.5 °C from 15 to 40 °C.

## Methods

<details>
    <summary><strong>initializeSensors()</strong>: Sets up all connected sensors with default calibration values</summary> 
    <p>Parameters </p>
    <p>None</p>
    <p>Returns</p>
    <p>1 on success, 0 on failure</p>
    <p>Example</p>
    ```py
    if (!octopus.initializeSensors()) {
        Serial.println("Failed to initialize Sensors!");
        while (1);
    }
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
    if (!octopus.start()) {
        Serial.println("Failed to start data collection!");
        while (1);
    }
    ```
</details>

<details>
    <summary><strong>stop()</strong>: Halts reading from sensors and stops all activities</summary>
    <p><strong>Parameters</strong></p>
    <p>None</p>
    <p><strong>Returns</strong></p>
    <p>1 on success, 0 on failure</p>
    <p><strong>Example</strong></p>
    ```py
    if (!octopus.stop()) {
        Serial.println("Failed to stop data collection!");
        while (1);
    }
    ```
</details>

<details>
    <summary><strong>setLED(int red, int green, int blue)</strong>: Adjusts the RGB LED color based on provided red, green, and blue values</summary>
    <p><strong>Parameters</strong></p>
    <p>- int red: int variable to indicate level of RED in the LED, values between 0-255 is valid.</p>
    <p>- int green: int variable to indicate level of GREEN in the LED, values between 0-255 is valid.</p>
    <p>- int blue: int variable to indicate level of BLUE in the LED, values between 0-255 is valid.   </p>
    <p><strong>Returns</strong></p>
    <p>1 on success, 0 on failure</p>
    <p><strong>Example</strong></p>
    ```py
    void loop() {
        octopus.setLED(0, 0, 255); // LED set to BLUE
        delay(500);
        octopus.setLED(0, 255, 0); // LED set to GREEN
        delay(500);
        octopus.setLED(255, 0, 0); // LED set to RED
        delay(500);
    }
    ```
</details>

<details>
    <summary><strong>readTemperature()</strong>: Returns the current temperature reading</summary>
    <p><strong>Parameters</strong></p>
    <p>None</p>
    <p><strong>Returns</strong></p>
    <p>1 on success, 0 on failure</p>
    <p><strong>Example</strong></p>
    ```py
    Serial.print("Temperature = ");
    Serial.print(ENV.readTemperature());
    Serial.println(" °C");
     ```
</details>

<details>
    <summary><strong>readHumidity()</strong>: Returns the current humidity level</summary>
    <p><strong>Parameters</strong></p>
    <p>None</p>
    <p><strong>Returns</strong></p>
    <p>1 on success, 0 on failure</p>
    <p><strong>Example</strong></p>
    ```py
    Serial.print("Humidity = ");
    Serial.print(octopus.readHumidity());
    Serial.println(" %");
     ```
</details>

<details>
    <summary><strong>checkBattery()</strong>: Returns the current battery level as a percentage</summary>
    <p><strong>Parameters</strong></p>
    <p>None</p>
    <p><strong>Returns</strong></p>
    <p>1 if battery data is available, 0 if no battery data is available</p>
    <p><strong>Example</strong></p>
    ```py
    Serial.print("Battery level as percentage: ");
    Serial.print(octopus.checkBattery());
    Serial.print("%");
     ```
</details>


<details>
    <summary><strong>update()</strong>: Refreshes readings from all sensors. Typically called within the main loop</summary>
    <p><strong>Parameters</strong></p>
    <p>None</p>
    <p><strong>Returns</strong></p>
    <p>1 on success, 0 on failure</p>
    <p><strong>Example</strong></p>
    <p>`Add example here on how to use the method`</p>
</details>


<details>
    <summary><strong>logging()</strong>: data logging if you are logging to SD card</summary>
    <p><strong>Parameters</strong></p>
    <p>None</p>
    <p><strong>Returns</strong></p>
    <p>1 on success, 0 on failure</p>
    <p><strong>Example</strong></p>
    <p>`Add example here on how to use the method`</p>
</details>

<details>
    <summary><strong>setInterval()</strong>: sets the interval for data logging</summary>
    <p><strong>Parameters</strong></p>
    <p>None</p>
    <p><strong>Returns</strong></p>
    <p>1 on success, 0 on failure</p>
    <p><strong>Example</strong></p>
    ```py
    octopus.setInterval(5000) // sets the interval for data logging to 5 seconds
    ```
</details>

