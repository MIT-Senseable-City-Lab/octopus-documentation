---
sidebar_label: '📦 Bill Of Materials'
sidebar_position: 2
---

# 📦 Bill Of Materials

---

Below, we provide you with the list of physical components that are required to build one Octopus. These parts can be divided in three groups: the PCB, MCU and external components; and materials for 3D printing the bodyframe. 


:::info

Note that all links provided are example components we used to build Octopus, but it does not exclude other providers or manufacturers.

:::

### PCB

![OctopuPCB](../../static/img/electronics/OctopusPCB.png)
 
The Octopus PCB can be obtained in two ways: 
1. Ordering a PCB from a manufacturing company and ask them to pre-solder the components, a service usually called PCBA (PCB Assembly)
2. Order the board and all hardware components separately, and solder it by hand. *Note, this requires you to know how to solder small components.*

For both options, gerberfiles, schematics and BOM files needed to order and solder the Octopus PCB are available at https://github.com/MIT-Senseable-City-Lab/octopus-fabrication/tree/main/hardware

*See [PCB](../build/electronics.md) for further information*


### MCU and external components

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

| **Bodyframe** | **Comment** | **URL** |
|-----------------|-----------------|-----------------|
| Filament |  PLA or PETG make sure the filament you order works with your printer. | [link](https://eu.store.bambulab.com/nl-nl/collections/pla/products/pla-basic-filament) |
| Mini rubber bands | Used for placing the PCB. Any kind of mini rubber bands should do the trick. | [link](https://www.amazon.com/Pack-of-300-Small-Hair-Elastics/dp/B003H54TY8/ref=sr_1_7?crid=OMQS1T259F9S&dib=eyJ2IjoiMSJ9.uJLkSiwuQOMWgLZ2ukFOQpcxkj-eCzyVC3rbcBJZHfH0s82BGGYD53Gec95Ttvqbyes1l6Rz40PnvkP8L-_KDOrNy17LJACTBcEZmO1KBmLbNaqj0kcyoAxKb_W55qviTYzcp3Qj5L_xGHCMvAkxYFwjESiBFACJrcssigr2rkWCLop4phy-U4O3UCkpB_Q0-kpEw9bMdxDG5gQ-kS-w5FVwqbsieadoJR92zq6tnwYpVZ4oyMKa-ptc_A4mNV4aNlIqbIkjdnmHmNeXuZov7PgrXO3ZfnULyRwKqBoMXctwMGYe6lxx1OzTjC4cS7cnCrD8G-rG_hZUjiHt6KmV_fHhUgprN12DubSe7T0aCeWVVUT-WMIKx1fals1oW5aV7BwUKh8KOHBbvJJ6GrOIfKXSadYYIGbhCxD7bFu6gaEHY3GOttfosBhP91gU5Ue-.5tLjR8ADCyKLKcPWO6c7Vydq0Vw9bYB9ZDMxdfEkd3Q&dib_tag=se&keywords=mini+rubber+band&qid=1737732260&sprefix=mini+rubber+ban%2Caps%2C199&sr=8-7) |
| 1/4 inch insert  | Used for different deployment strategies like tripods. | [link](https://www.amazon.nl/-/en/Kitchen-Thread-Insert-0-6-20-Cadmium/dp/B09CL453M5/) |

**Note**: To attatch the bodyframe to other surfaces you might need to buy other components. Possible attatchments can be anything with a basic gopro mount (like a tripod), rubberbands, magnets, or strings. 


### PCB and components


| Item Type          | Quantity | Reference                        | Part                      | Ref           | Description                                                                 | Pkg Type | Package           |
|--------------------|----------|----------------------------------|---------------------------|------------------------------|-----------------------------------------------------------------------------|----------|-------------------|
| PCB                | 1        | CS1                              |                           |                              | (7x7)mm HAL 4L Cu=35um                                                      |          |                   |
| Capacitor          | 5        | C1, C6, C8, C9, C11                  | 100n/50V                 | [link](https://www.findchips.com/search/CC0805KRX7R9BB104)           | CHIP CAP.CER. 100nF 50V 10% X7R 0805                                       | SMD      | CS-C-0805         |
| Capacitor          | 2        | C2,C3                            | 4.7u/50V-X5R             | [link](https://www.findchips.com/search/C2012X5R1H475K125AB)         | CHIP CAP.CER. 4.7uF 50V 10% X5R 0805                                       | SMD      | CS-C-0805         |
| Capacitor          | 2        | C4,C5                            | 10u/25V-X5R              | [link](https://www.findchips.com/search/CL21A106KAYNNNE)             | CHIP CAP.CER. 10uF 25V 10% X5R 0805                                        | SMD      | CS-C-0805         |
| Capacitor          | 1        | C7                               | 0.33F/5.5V               | [link](https://www.findchips.com/search/CB5R5334HF-ZJP)              | COND.EL.RAD. 0.33F 5.5V -20%+80% P=10 D=11.5x7.5 CB5R5334HF-ZJP CDA        | THT      | CT-1150-1000      |
| Capacitor          | 1        | C10                              | 22u/10V-X5R              | [link](https://www.findchips.com/search/CL21A226MPQNNNE)             | CHIP CAP.CER. 22uF 10V 20% X5R 0805                                        | SMD      | CS-C-0805         |
| Diode              | 5        | DS1, DS2, DS3, DS4, DS5              | PMEG1030EJ               | [link](https://www.findchips.com/search/PMEG1030EJ)                  | DIODE SCHOTTKY 3A 10V PMEG1030EJ NXP SOD323 SMT                            | SMD      | SOD323            |
| Connector          | 1        | J1                               | B2B-PH-K-S               | [link](https://www.findchips.com/search/B2B-PH-K-S)                  | CONN. PH 2P M P=2 B2B-PH-K-S JST THT                                       | THT      | J-2-0200-MDT-B2B  |
| Connector          | 1        | J4                               | SSM-102-L-SV             | [link](https://www.findchips.com/search/SSM-102-L-SV)                | STRIP 2P F/D P=2.54 SSM-102-L-SV SAMTEC SMT                                | SMT      | J-2-0254-FDS-SSM  |
| Connector          | 1        | J5                               | SSM-108-L-SV             | [link](https://www.findchips.com/search/SSM-108-L-SV)               | STRIP 8P F/D P=2.54 SSM-108-L-SV SAMTEC SMT                                | SMD      | J-8-0254-FDS-SSM  |
| Connector          | 1        | J6                               | SSM-109-L-SV             | [link](https://www.findchips.com/search/SSM-109-L-SV)               | STRIP 9P F/D P=2.54 SSM-109-L-SV SAMTEC SMT                                | SMT      | J-9-0254-FDS-SSM  |
| Connector          | 1        | J7                               | BM04B-SRSS-TBT           | [link](https://www.findchips.com/search/BM04B-SRSS-TBT)            | CONN. SH 4P M/D P=1 BM04B-SRSS-TBT(LF)(SN) JST SMT                         | SMD      | J-4-0100-MDS-SH   |
| Connector          | 1        | J8                               | B5B-ZR-SM4-TF            | [link](https://www.findchips.com/search/B5B-ZR-SM4-TF)               | CONN. ZH 5P M/D P=1.5 ZH JST B5B-ZR-SM4-TF                                 | SMD      | J-5-0150-MDS-B5B-ZR-SM4 |
| Connector          | 1        | J9                               | MSD-4-A                  | [link](https://www.findchips.com/search/MSD-4-A)                    | CONN. MICROSD 9P F/90° PUSH-PUSH MSD-4-A MOLEX SMT                         | SMD      | J-9-0110-FOS-MSD-4-A |
| LED                | 1        | LD1                              | 150141YS73100            | [link](https://www.findchips.com/search/150141YS73100)               | DIODE LED150141YS73100 WURTH SMT                                           | SMD      | LD-3228           |
| RGB                | 2        | LD2, LD3                          | T3A33BRG-H9C0002X1U1930  | [link](https://www.findchips.com/search/T3A33BRG-H9C0002X1U1930)   | DIODE LED RGB T3A33BRG-H9C0002X1U1930 HARVATEK SMT                         | SMD      | LD-T3A33          |
| Inductor           | 1        | L1                               | LQM2HPN4R7MG0L           | [link](https://www.findchips.com/search/LQM2HPN4R7MG0L)              | INDUCTOR 4.7uH 1.1A 20% 1008 LQM2HPN4R7MG0L MURATA SMT                    | SMD      | LS-1008           |
| Tactile Switch     | 1        | PB1                              | FSM4JSMAATR              | [link](http://fsm4jsmaatr/)                 | PULSANTE 24V 0.05A D=6x6 SPST FSM4JSMAATR TE SMT                          | SMD      | PB-OT-FSM4J       |
| Resistor           | 1        | R1                               | 523R                     | [link](https://www.findchips.com/search/CRCW0805523RFKEA)            | CHIP RES. 523R 0805 1/8W 1% 100PPM/°C                                      | SMD      | RS-0805           |
| Resistor           | 2        | R2,R5                            | 120k                     | [link](https://www.findchips.com/search/RC0805FR-07120KL)            | CHIP RES. 120K 0805 1/8W 1% 100PPM/°C                                      | SMD      | RS-0805           |
| Resistor           | 1        | R3                               | 430k                     | [link](https://www.findchips.com/search/CRCW0805430KFKEA)            | CHIP RES. 430K 0805 1/8W 1%                                                | SMD      | RS-0805           |
| Resistor           | 1        | R4                               | 2.8k                     | [link](https://www.findchips.com/search/RC0805FR-072K8L)             | CHIP RES. 2K8 0805 1/8W 1% 100PPM/°C                                      | SMD      | RS-0805           |
| Resistor           | 1        | R6                               | 180k                     | [link](https://www.findchips.com/search/RC0805FR-07180KL)            | CHIP RES. 180K 0805 1/8W 1% 100PPM/°C                                      | SMD      | RS-0805           |
| Resistor           | 2        | R7,R8                            | 4.7k                     | [link](https://www.findchips.com/search/CRCW08054K70FKEAC)           | CHIP RES. 4K7 0805 1/8W 1%                                                 | SMD      | RS-0805           |
| Resistor           | 7        | R9, R10, R11, R12, R13, R15, R16       | 33k                      | [link](https://www.findchips.com/search/RMCF0805FT33K0)              | CHIP RES. 33K 0805 1/8W 1% 100PPM/°C                                      | SMD      | RS-0805           |
| Resistor           | 1        | R14                              | 470R                     | [link](https://www.findchips.com/search/RC0805FR-07470RL)            | CHIP RES. 470R 0805 1/8W 1%                                                | SMD      | RS-0805           |
| Resistor           | 1        | R17                              | 10k                      | [link](https://www.findchips.com/search/RMCF0805FT10K0)              | CHIP RES. 10K 0805 1/8W 1%                                                 | SMD      | RS-0805           |
| Resistor           | 1        | R18                              | 1.5k                     | [link](https://www.findchips.com/search/311-1.5KARCT-ND)             | CHIP RES. 1K5 0805 1/8W 1%                                                 | SMD      | RS-0805           |
| TVS Diodes         | 1        | TVS1                             | DT2042-04SO-7            | [link](https://www.findchips.com/search/DT2042-04SO-7)               | DIODE TVS UNIDIR. DT2042-04SO-7 DIODES SOT23-6 SMT                         | SMD      | SOT23-6-DBV       |
| Charger IC         | 1        | U1                               | MCP73833T-AMI/UN         | [link](https://www.findchips.com/search/MCP73833T-AMI%2FUN)            | MCP73833T-AMI/UN MICROCHIP MSOP10 SMT                                      | SMD      | MSOP10            |
| Regulator IC       | 1        | U2                               | MCP1642B-50I/MS          | [link](https://www.findchips.com/search/MCP1642B-50I%2FMS)             | BOOST MCP1642B-50I/MS MICROCHIP DFN8 SMT                                   | SMD      | MSOP8             |
| RTC IC             | 1        | U3                               | RX-8025SA:AA             | [link](https://www.findchips.com/search/RX-8025SA%3AAA)                | CLOCK RX-8025SA:AA EPSON TIMING SOP14 SMT                                  | SMD      | SOP14             |
