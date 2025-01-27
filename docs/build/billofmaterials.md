---
sidebar_label: '📦 Bill Of Materials'
sidebar_position: 2
---

# 📦 Bill Of Materials

---

Below, we provide you with the full list of physical components that are compatible with the Octopus. These can be divided in three parts: how to prepare and order the PCB, other hardware electronics and sensors, and materials for the bodyframe. 


:::info

Note that all links provided are examples we know will work to build the Octopus, but it does not exclude other providers of manufacturers.

:::

### PCB

![OctopuPCB](../../static/img/electronics/OctopusPCB.png)
 
The costum PCB can be set up to ways: 
1. Order the board from a manufacturing company and ask them to pre-solder the components for you. 
2. Order the board and all small hardware components separately, and solder it by hand. *Note, this requires you to know how to solder small components.*

In any case, you can find all the Gerberfiles, schematics and BOM files needed to order and solder the Octopus PCB: https://github.com/MIT-Senseable-City-Lab/octopus-fabrication/tree/main/hardware

*See [PCB](../build/electronics.md) for more information on how to set it up.*


### Hardware components

Overview of all hardware components possible to add to the Octopus: 

| **Sensor** | **Comment** | **URL** |
|-----------------|-----------------|-----------------|
| Arduino Nano 33 BLE Sense Rev 2 | Arduino microcontroller board  | [link](https://store.arduino.cc/products/arduino-nano-33-ble) |
| Arduino Nicla Vision | Arduino Pro microcontroller board | [link](https://store.arduino.cc/products/nicla-vision) |
| SPS30 | Particulate matter evaluation kit | [link](https://sensirion.com/products/catalog/SEK-SPS30) |
| GPS | GPS-15210 | [link](https://www.digikey.nl/nl/products/detail/sparkfun-electronics/GPS-15210/10064422?gclsrc=aw.ds&&utm_adgroup=&utm_source=google&utm_medium=cpc&utm_campaign=PMax%20Shopping_Product_High%20ROAS&utm_term=&productid=10064422&utm_content=&utm_id=go_cmp-19662899439_adg-_ad-__dev-c_ext-_prd-10064422_sig-CjwKCAiA0rW6BhAcEiwAQH28IirRQWJAN0mfAIAmgZzMIgX9HwwFu55MEFqc6QxFvuBYOKGDAZJENRoC9_gQAvD_BwE&gad_source=1&gclid=CjwKCAiA0rW6BhAcEiwAQH28IirRQWJAN0mfAIAmgZzMIgX9HwwFu55MEFqc6QxFvuBYOKGDAZJENRoC9_gQAvD_BwE&gclsrc=aw.ds) |
| Lithium Battery | Lightwaited battery based on Lithium Ion chemistry. Order size of the battery related to your specific use case. | [link](https://www.sparkfun.com/products/13851) |
| SD Card | SD card to store collected data (List from Amazon). | [link](https://www.amazon.com/micro-sd-card/s?k=micro+sd+card) |
| 5V DC fan 40x40mm | Fan to cool down the running hardware. Any kind of 5V DC fan 40x40mm should work. | [link](https://www.amazon.com/WINSINN-Bearings-Brushless-Cooling-40mm10mm/dp/B08R9JJDYP/ref=sr_1_3?dib=eyJ2IjoiMSJ9.kiua4PwoDvy6YEgZbZBd-Fg6r1kBGUJ3gTOJhKDOtrJcp6vIjxJj5La3BUFeBFqDj9DNL313Qr3j3IuwoTitGeuVl7P3_3MV2HuZs-5BaxjuzBvJBuPVxyPr3O_VBim4DPfZmZXVs_0jaGZ1WcFfYXJl6FttFupFABEOZ3_d5avGKCRSSp1Pb_UmRgLFxHUNtBYPhWTBykmhAnm7W4B2fX32yrhik46irZ6D0VnosWI.u_Qy2gOcEro5xCuWbaEV0GUKhHCMzrd5wopiVcLzlfg&dib_tag=se&keywords=5V%2BDC%2Bfan%2B40x40mm&qid=1737731003&sr=8-3&th=1) |


### Bodyframe components

Components you need to order to build the body frame:

| **Bodyframe** | **Type** | **Comment** | **URL** |
|-----------------|-----------------|-----------------|-----------------|
| Filament |  White PLA or PETG | For 3D printing the Octopus, make sure the filament you order works with your printer! | [link](https://eu.store.bambulab.com/nl-nl/collections/pla/products/pla-basic-filament) |
| Mini rubber bands | Used for placing the PCB. Any kind of mini rubber bands should do the trick. | [link](https://www.amazon.com/Pack-of-300-Small-Hair-Elastics/dp/B003H54TY8/ref=sr_1_7?crid=OMQS1T259F9S&dib=eyJ2IjoiMSJ9.uJLkSiwuQOMWgLZ2ukFOQpcxkj-eCzyVC3rbcBJZHfH0s82BGGYD53Gec95Ttvqbyes1l6Rz40PnvkP8L-_KDOrNy17LJACTBcEZmO1KBmLbNaqj0kcyoAxKb_W55qviTYzcp3Qj5L_xGHCMvAkxYFwjESiBFACJrcssigr2rkWCLop4phy-U4O3UCkpB_Q0-kpEw9bMdxDG5gQ-kS-w5FVwqbsieadoJR92zq6tnwYpVZ4oyMKa-ptc_A4mNV4aNlIqbIkjdnmHmNeXuZov7PgrXO3ZfnULyRwKqBoMXctwMGYe6lxx1OzTjC4cS7cnCrD8G-rG_hZUjiHt6KmV_fHhUgprN12DubSe7T0aCeWVVUT-WMIKx1fals1oW5aV7BwUKh8KOHBbvJJ6GrOIfKXSadYYIGbhCxD7bFu6gaEHY3GOttfosBhP91gU5Ue-.5tLjR8ADCyKLKcPWO6c7Vydq0Vw9bYB9ZDMxdfEkd3Q&dib_tag=se&keywords=mini+rubber+band&qid=1737732260&sprefix=mini+rubber+ban%2Caps%2C199&sr=8-7) |
| Bottom screw | Used for different deployment strategies like tripods. | [link](https://www.amazon.nl/-/en/Kitchen-Thread-Insert-0-6-20-Cadmium/dp/B09CL453M5/) |

**Note**: To attatch the bodyframe to other surfaces you need to buy other components. Possible attatchments can be anything with a basic gopro mount (like a tripod), rubberbands, magnets, or strings. 


