Bienvenidos a ***Bumeran Selecta*** un proyecto realizado por Ariel Ferencak, Lorenzo Olmedo, María Ángel Ruíz, Matías Goni y Sabrina Demetrio, alumos de Plataforma 5.

Este proyecto consiste en la reproducción de los servicios ofrecidos por la compañía Jobint S.A a través de su portal Bumeran Selecta, cuyo propósito tiene como finalidad proveer de reclutadores a empresas que no cuentan con un departamento de Recursos Humanos o necesitan cubrir puestos de trabajo de forma expeditiva. 

***__Set up:__*** 

1. Forkear y clonar el repositorio.

2. Para instalar todas las dependencias, utilizar el comando ***yarn***.

3. Luego para levantar los servidores, utilizar ***__yarn run dev o yarn dev__*** para correr el servidor front-end en ***local host 3000***. Si se desear correr el back-end, utilizar el comando ***__yarn server__***, que levantá el ***local host en el puerto 8000***.

4. Para poder probar las funcionalidades del sitio es necesario seedear una base de datos, para ello se deberá crear una base de datos en mySQL, por lo que es necesario instalar mySQL.
Una vez instalado a mySQL, se deberá crear una base de datos llamada bumeranSelecta. 

**Nota: En Linux puedes acceder a mySQL usando el comando sudo mySQL -u root -p. Primero ingresa tu contraseña de Linux y luego la contraseña de mySQL. Una vez ingresado estos datos, deberás crear una base de datos usando ***__create database bumeranSelecta;__***.**

5. Luego deberás ingresar a la capeta ***api/config*** y utilizando el comando **node seed.js** para crear información en la base de datos. La terminal debe indicar un mensaje de **__seed succesfully__**


***MANUAL DEL USUARIO***

***__Flujo del Reclutador:__***
Estando posicionado en el ***Home*** dirigite a la botón de ***__Crear cuenta__***, esto permitirá crear una cuenta para un reclutador. Y una vez creada, te redirigirá a la página de ingreso, donde ingresarás tu email y contraseña recién creados.

Finalizado el ingreso, como reclutador verás el ***__Home__*** y tu ***__Perfil__***. En este último podrás ver tus busquedas activas, terminar las mismas y editar tu perfil.


***__Flujos del Administrador:__***

A fines de evitar que cualquier persona pueda ser designada administradora, primero deberás crear una cuenta, para ello sigue los mismo pasos que se indican en ***__Flujo del Reclutador__***. 
Realizado esto, deberás dirigirte hacía la base de datos de mySQL, ingresar en ***__bumeranSelecta__***, buscar al usuario al cual se le quieren brindar los permisos de admin y cambiar el campo de ***admin*** por el valor ***1***.
***No olvides aplicar los cambios.***

Finalizado este proceso, deberas reingresar a tu cuenta pudiendo visualizar como Administrador las siguientes funcionalidades: 

***Home***
***Busquedas***
***Selección de Reclutadores***
***Repostes y Estadísticas***
***Perfil***


***Busquedas:***
En esta sección podrás visualizar las publicaciones que se encuentran dentro de Bumeran Selecta, pudiendo filtrar por: País, Área, Fecha y Estado de las mismas. A su vez visualizarás que en las cards se encuentran los ***__estados de las busquedas en función de: No iniciada, En proceso y Finalizada.__***
Además encontrás información ilustrativa sobre la cantidad de postulaciones, el reclutador asigando (en caso de estar la busqueda En proceso) y su ranking, y para el país el cuál se realiza la busqueda.

Al hacer click en alguna de las cards podrás ver la vista indivual de las busquedas. Allí podrás asignar a un reclutador recomendado según su ranking. También podrás eliminar la busqueda y editar la misma en caso de ser necesario.

Si se asigna un reclutador, el sistema ya no te permitirá asignar más reclutadores y la busqueda se da por iniciada cambiando su estado a ***En proceso***.

Por último, en esta sección también se podrán ingresar nuevas busqudas al sitio mediante el boton ***+***. Esta funcionalidad te redirigirá a un formulario en el cual podrás ingresar toda la información necesaría que desees que se visualize luego en la publicación.

***Selección de Reclutadores:***
En este apartado, al igual que en ***Busquedas*** podrás filtrar la información, pero en este caso te será de utilidad para encontrar un reclutador apto según el ranking, país y área de experiencia. También podrás encontrar a un reclutador por su nombre y/o apellido.

Si realizas click en el nombre del reclutador o foto accederás a su perfil, obteniendo mayor información sobre este y las busquedas que tiene asigdadas. Al mismo tiempo, esto te permitirá evitar asignar más busquedas de las que puede abarcar dicha persona. 

***A su vez, en esta sección podrás editar y eliminar un reclutador en caso de ser necesario.***

***Reportes y Estadisticas***
Al igual que las dos anteriores secciones podrás utilizar filtros que te facilitarán la accesibilidad a la información. 

Aquí podrás visualizar una tabla que mostrará el titulo de la busqueda, su estado, fecha de creación o cambio de estado, país, aŕea, vacantes disponibles y personas postuladas en caso de que la bsuqueda se encuentra finalizada. 
***Nota: Dicha tabla también puede ser descargada en un archivo csv, en caso de ser necesario.***

Por último, como Administrador visualizarás gráficos que proporcionarán información de manera mucho más ilustrativa sobre: ***El estado de las busquedas por país y el tiempo de finalización de las busquedas por aŕea.*** Esta información te será de utilidad para la toma de deciones rápida en caso de que algún área este teniendo un cuello de botella en las busquedas y este necesitando más reclutadores para mejorar el servicio de Bumeran Selecta.  







