---
sidebar_label: '📦 Bill Of Materials'
sidebar_position: 2
---

# 📦 Bill Of Materials

---

Below, we provide you with the full list of physical components that are compatible with the octopus. These can be divided in three parts: how to prepare and order the PCB, other hardware electronics and sensors, and materials for the bodyframe. 


:::info

Note that all links provided are examples we know will work to build the octopus, but it does not exclude other providers of manufacturers.

:::

### PCB

![OctopuPCB](../../static/img/electronics/OctopusPCB.png)
 
The costum PCB can be set up to ways: 
1. Order the board from a manufacturing company and ask them to pre-solder the components for you. 
2. Order the board and all small hardware components separately, and solder it by hand. *Note, this requires you to know how to solder small components.*

In any case, you can find all the Gerberfiles, schematics and BOM files needed to order and solder the Octopus PCB: https://github.com/MIT-Senseable-City-Lab/octopus-fabrication/tree/main/hardware

*See [PCB](../build/electronics.md) for more information on how to set it up.*


### Hardware components

Overview of all hardware components possible to add to the octopus: 

| **Sensor** | **Comment** | **URL** |
|-----------------|-----------------|-----------------|
| Arduino Nano 33 BLE Sense Rev 2 | Arduino microcontroller board  | [link](https://store.arduino.cc/products/arduino-nano-33-ble) |
| Arduino Nicla Vision | Arduino Pro microcontroller board | [link](https://store.arduino.cc/products/nicla-vision) |
| SPS30 | Particulate matter evaluation kit | [link](https://sensirion.com/products/catalog/SEK-SPS30) |
| GPS | GPS-15210 | [link](https://www.digikey.nl/nl/products/detail/sparkfun-electronics/GPS-15210/10064422?gclsrc=aw.ds&&utm_adgroup=&utm_source=google&utm_medium=cpc&utm_campaign=PMax%20Shopping_Product_High%20ROAS&utm_term=&productid=10064422&utm_content=&utm_id=go_cmp-19662899439_adg-_ad-__dev-c_ext-_prd-10064422_sig-CjwKCAiA0rW6BhAcEiwAQH28IirRQWJAN0mfAIAmgZzMIgX9HwwFu55MEFqc6QxFvuBYOKGDAZJENRoC9_gQAvD_BwE&gad_source=1&gclid=CjwKCAiA0rW6BhAcEiwAQH28IirRQWJAN0mfAIAmgZzMIgX9HwwFu55MEFqc6QxFvuBYOKGDAZJENRoC9_gQAvD_BwE&gclsrc=aw.ds) |
| Lithium Battery | Lightwaited battery based on Lithium Ion chemistry. Order size of the battery related to your specific use case. | [link](https://www.sparkfun.com/products/13851) |
| SD Card | SD card to store collected data (List from Amazon). | [link](https://www.amazon.com/micro-sd-card/s?k=micro+sd+card) |

### Bodyframe components

Components you need to order to build the body frame:

| **Bodyframe** | **Type** | **Comment** | **URL** |
|-----------------|-----------------|-----------------|-----------------|
| Filament |  White PLA or PETG | For 3D printing the octopus, make sure the filament you order works with your printer! | [link](https://eu.store.bambulab.com/nl-nl/collections/pla/products/pla-basic-filament) |

**Note**: To attatch the bodyframe to other surfaces you need to buy other components. Possible attatchments can be anything with a basic gopro mount (like a tripod), rubberbands, magnets, or strings. 


