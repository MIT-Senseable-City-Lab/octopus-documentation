---
sidebar_position: 2
---

# Octopus API

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
<!--
<details>
<details markdown='1'><summary>initializeSensors(): Sets up all connected sensors with default calibration values</summary> 
Sets up all connected sensors with default calibration values.
**Parameters**
None
**Returns**
1 on success, 0 on failure
**Example**

```
if (!octopus.initializeSensors()) {
    Serial.println("Failed to initialize Sensors!");
    while (1);
}
```
</details>


<details markdown='1'><summary>start(): Begins continuous reading of all sensors</summary> 
Begins continuous reading of all sensors.

### Parameters

None

### Returns

1 on success, 0 on failure

### Example

```
if (!octopus.start()) {
    Serial.println("Failed to start data collection!");
    while (1);
}
```

</details>

<details markdown='1'><summary>stop(): Halts reading from sensors and stops all activities</summary> 
Halts reading from sensors and stops all activities.

### Parameters

None

### Returns

1 on success, 0 on failure

### Example

```
if (!octopus.stop()) {
    Serial.println("Failed to stop data collection!");
    while (1);
}
```

</details>

<details markdown='1'><summary>setLED(int red, int green, int blue): Adjusts the RGB LED color based on provided red, green, and blue values.</summary>

### Parameters

- int red: int variable to indicate level of RED in the LED, values between 0-255 is valid.
- int green: int variable to indicate level of GREEN in the LED, values between 0-255 is valid.
- int blue: int variable to indicate level of BLUE in the LED, values between 0-255 is valid.

### Returns

_example_
1 on success, 0 on failure

### Example

```
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

<details markdown='1'><summary>readTemperature(): Returns the current temperature reading</summary> 
Returns the current temperature reading.

### Parameters

None

### Returns

_example_
1 on success, 0 on failure

### Example

```
Serial.print("Temperature = ");
Serial.print(ENV.readTemperature());
Serial.println(" °C");
```

</details>

<details markdown='1'><summary>readHumidity(): Returns the current humidity level</summary> 
Returns the current humidity level.

### Parameters

None

### Returns

_example_
1 on success, 0 on failure

### Example

```
Serial.print("Humidity = ");
Serial.print(octopus.readHumidity());
Serial.println(" %");
```

</details>

<details markdown='1'><summary>checkBattery(): Returns the current battery level as a percentage</summary> 
Returns the current battery level as a percentage.

### Parameters

None

### Returns

_example_
1 if battery data is available, 0 if no battery data is available

### Example

```
Serial.print("Battery level as percentage: ");
Serial.print(octopus.checkBattery());
Serial.print("%");
```

</details>

<details markdown='1'><summary>update(): Refreshes readings from all sensors. Typically called within the main loop</summary> 
Refreshes readings from all sensors. Typically called within the main loop.

### Parameters

None

### Returns

_example_
1 on success, 0 on failure

### Example

`Add example here on how to use the method`

</details>

<details markdown='1'><summary>logging(): data logging if you are logging to SD card</summary> 
Data logging if you are logging to SD card.

### Parameters

None

### Returns

_example_
1 on success, 0 on failure

### Example

`Add example here on how to use the method`

</details>

<details markdown='1'><summary>setInterval(): sets the interval for data logging</summary> 


### Parameters

None

### Returns

_example_
1 on success, 0 on failure

### Example

`octopus.setInterval(5000) // sets the interval for data logging to 5 seconds`

</details>

 </details>

---
-->