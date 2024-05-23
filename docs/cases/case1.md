---
sidebar_position: 1
icon: 🥵
---

# 🥵 Temperature Exposure 

---

## Introduction

In this tutorial we will go through the requirements of getting started with the Octopus Platform, and collect temperature exposure data. 

:::warning

This guide assumes that you already have built an octopus to monitor temperature, humidity, and pressure.

:::

## Goals

The goals of these projects are:

  📘 Learn how to use the **Octopus** Library

  🐙 Collect temperature data with the octopus
  
  🗂️ Upload the data from the Octopus
  
  📈 Process and analyze the collected data

## Hardware and Software needed

The octopus for temperature exposure consists of these components:

- [Octopus](../build/)
- [Arduino IDE](../build/firmware/SoftwareInstallation.md)
- Octopus Library Installed

### Octopus Platform Architecture for Temperature Exposure

Monitoring temperature with the octopus is a cheap and simple way to use the octopus. The architecture of the device is shown below.

![Case1Architecture](../../static/img/usecase1-architecture.jpg)

1. First, the octopus will log temperature and humidity together with a timestamp to your SD card on the device based on the configuration. 
2. Then, you take the SD card and upload the raw data to your computer. Until this step, no processing has happened to the collected data.
3. In the notebook provided, you get to upload your data and visualize it in a graph. To process the data, we use online services from Google (running a notebook in Google Colab to process data, and Google Disk to store the data). 

The progress bars below each component is indicating how much processing power is used. As you can see, most of the processing power used in this use case is placed in the cloud when you clean and analyze the collected data. 

*Note:* There are however other ways to do this analysis with the provided notebook; JupyterLab, Kaggle Kernels, Microsoft Azure Notebooks, and more. 

## How the sensors work

Before we test our setup, let's have another look at the sensors that come with the Octopus.

### The HS3003 Sensor

![HS303SENSOR](../../static/img/HS303sensor.png) _Image from the official Arduino webpage._

Temperature sensors are devices designed to translate physical temperature into digital data, while humidity sensors detect atmospheric moisture levels and convert them into electrical signals.

The HS3003 stands out as an ultra-compact sensor engineered for measuring relative humidity and temperature. Utilizing the I2C protocol, we will establish communication with the sensor to retrieve data. The sensor encompasses a range of values, including:

_Table 1. Sensor spesification_

| Parameter            | Condition     | Typical   | Range        |
|:---------------------|:--------------|:---------:|:------------:|
| Humidity     | 20 to +80% rH | ± 3.5% rH | 0 to 100 %   |
| Temperature  | 15 to +40 °C  |  ± 0.5 °C | -40 to 120°C |

These sensor types are used more than you would imagine and are found in various everyday objects!

Some of the useful ways they are used are seen in the following applications:

- Air conditioning, heating, and ventilation.
- Air humidifiers.
- Refrigerators.
- Wearable devices.
- Smart home automation.
- Industrial automation.
- Respiratory equipment.
- Asset and goods tracking.

If you want to read more about the HS3003 sensor you can take a look at the [datasheet](https://docs.arduino.cc/resources/datasheets/REN_HS300x-Datasheet_DST.pdf) provided by Arduino.

---

## Programming the board

1.**Octopus Setup**

  Open Arduino IDE, click on **Libraries** tab and search for **Octopus** --> **Examples**, open **Temperature Exposure**. Once the scetch is open you can rename the file to **Temperature Exposure Deployment**.

2.**Connect the board**

  Next, connect the Arduino Nano 33 BLE Sense Rev2 to your computer to verify if the Web Editor recognizes it. If successful, the board and port should be visible as depicted in the image. In case they don't appear, refer to the instructions to install the required plugin enabling the Editor to detect your board (link to example in this documentation).

3.**Test data logging and print sensor values**

  Copy-paste the code below, or find it in *Examples* within the Arduino library. This code will read the sensor values, log the values to the Octopus, and print them in the Serial Monitor within Arduino IDE through the `Serial.println()` functions.

TODO: update after you know the scope of Octopus Library
```py title="TemperatureExposureDeployment.h"
#include <Octopus.h>

unsigned long previousMillis = 0;
const long interval = 1000; // Interval in milliseconds

void setup() {
  Serial.begin(9600);
  while (!Serial);

  // Set up connection with default values
  if (!Octopus.initializeSensors()) {
    Serial.println("Failed to initialize sensors.");
    while (1);
  }

  Octopus.setInterval(interval) // sets the interval for data logging

  // Begin continuous reading of all sensors (default )
  if (!Octopus.start()) {
    Serial.println("Failed to start data collection.");
    while (1);
  }

}

void loop() {
  unsigned long currentMillis = millis();

  // Code for printing data to serial monitor
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;  // Save the last time data was saved

     // Get current time
    unsigned long currentTime = millis();
    unsigned long seconds = currentTime / 1000;
    unsigned long minutes = seconds / 60;
    unsigned long hours = minutes / 60;

    // Format time
    String timestamp = String(hours) + ":" + String(minutes % 60) + ":" + String(seconds % 60);

    Serial.print("Time: ");
    Serial.println(timestamp);

    // Read all the sensor values
    float temperature = Octopus.readTemperature();
    float humidity    = Octopus.readHumidity();

    // Print each of the sensor values
    Serial.print("Temperature = ");
    Serial.print(temperature);
    Serial.println(" °C");

    Serial.print("Humidity    = ");
    Serial.print(humidity);
    Serial.println(" %");

    // Print an empty line
    Serial.println();
  }

  // Wait for a short time before the next iteration
  delay(100); // You can adjust this delay according to your needs
}
```

*If needed, more information on how to use the Serial Monitor can be found [here](https://docs.arduino.cc/software/ide-v2/tutorials/ide-v2-serial-monitor/).* 

---

## Deployment

When deploying an environmental sensing device outside, there are several factors to consider to ensure accurate and reliable operation. Key factors to consider are: 

|**External Factors**: |  |
|--------|---------|
| Temperature Extremes | Ensure the sensor and other electronic components can withstand the local temperature extremes, both hot and cold. |
| Humidity and Moisture | Exposure to rain, fog, or high humidity can damage the sensor and electronics. This is especially critical for sensors not inherently designed to be waterproof. |
|Sunlight and Heat Radiation | Direct sunlight can cause sensors to read higher temperatures due to solar radiation heating the sensor itself (radiative heating).|
| Wind and Air Flow| Adequate airflow around the sensor ensures more accurate temperature readings but can also expose the sensor to more environmental wear and tea.| 

| **Physical Casing and Placement** | |
|--------|---------|
| Weatherproof Casing | Even though the octopus can handle some rain, try to limit the amount of heavy rain. |
| Mounting and Placement | Securely mount the casing to avoid physical damage from wind or animals. Placement should be considered to minimize exposure to direct sunlight and maximize exposure to ambient air.|
| Maintenance Accessibility | Design the installation so that the device can be easily accessed for maintenance, calibration, or battery replacement. |

---

## Data analysis with Google Colab

Now that you have the data collected, it's time to analyze it to answer our questions about heat exposure. This guide will provide you with a setup for how to use Google Colaboratory in analyzing your data. 

How to setup Google Colaboratory is added in How To's: [How to setup Google Colaboratory](../community/HowTo.md)

Google Colab Notebook for heat exposure data analysis: <a href="./notebooks/UseCase1_HeatExposure.ipynb" download>Click to Download</a>

---

## Troubleshooting

When developing and adopting sensing technologies, there is a lot of things that might go wrong. Here is a list that includes some of the most common problems: 

1. **Incorrect Wiring:** Ensure that the SD card module is wired correctly to the Arduino. Check that the connections are secure and match the pin configurations in your code.
2. **Power Supply Issues:** SD cards can be sensitive to power supply fluctuations. Make sure your Octopus has a stable power source and sufficient current capacity to power both the Arduino Board and the SD card module.
3. **SD Card Formatting:** If the SD card is not properly formatted or formatted with an incompatible file system, it may not work correctly. Ensure the SD card is formatted to FAT16 or FAT32 using a compatible formatting tool.
4. **File System Corruption:** Writing data to the SD card incorrectly or abruptly removing power while writing can lead to file system corruption. This can cause errors when trying to read or write data. Safely eject the SD card before removing it from the Arduino.
5. **File Open/Close Errors:** Make sure you're correctly opening and closing files on the SD card. Failure to close a file properly after writing data can lead to data loss or corruption.
6. **Buffer Overflow:** Writing too much data to the SD card buffer at once can cause buffer overflow errors. Ensure you're writing data in manageable chunks and not overwhelming the buffer.
7. **Serial Communication Interference:** If you're using serial communication for debugging or logging alongside SD card operations, ensure there are no conflicts or interference between the two processes.
8. **Hardware Failure:** In rare cases, hardware components such as the SD card module or the Arduino board itself may be defective or damaged, leading to unpredictable behavior. Try swapping out components to isolate and identify any faulty hardware.

:::tip
It is very common to have problems with the USB connection, but dont worry. There are a lot of online forums that can help you troubleshoot your problem, have a look at for example the [Arduino Forum](https://forum.arduino.cc/c/using-arduino/6). 

:::

## Conclusion

Good work! This guide has shown you how to use the octopus to monitor heat in a fixed position. By only using the base of the octopus device, you are able to measure hyperlocal temperature levels! Are you ready for the next challenge? 😉

We encourage you to have a look at the next use cases 2 and 3 to explore new projects with urban sensing. 

Please leave a comment in the GitHub repo if you have any feedback for Use Case 1 😊

---

