# INVOICE-EXTRACTOR

![image](https://github.com/user-attachments/assets/0841c81b-51b9-450e-a9a8-8b19cd21d949)




## INTRODUCTION
This project was created with the idea of helping company accounting teams quickly extract and export invoice information into a CSV file.


## PROJECT REQUIREMENTS
* The code must be reusable.
* It must be able to read PDF files.
* We should be able to specify the format of the information we want to extract.
* It must rename the files using relevant information from the document to allow quick identification.
* It must extract the information and create a CSV file with it.

## LANGUAGE
The source code is developed in TypeScript. However, you can modify it as you wish to work with the language you're most comfortable with.



## PREREQUISITES AND DEPENDENCIES
* Node.js >= 16
* npm >= 
* fs module
* TypeScript
* pdf-parse
* @types/node
  

## SET UP
Setting up a new project is quite simple with the invoice-extractor CLI. With npm installed, you can create a new invoice-extractor project with the following commands in your OS terminal:

>```bash
>npX nombre-proyecto-cli init
>





## GETTING STARTED

1. Create your project folder and navigate into it.

2. Run the following command in terminal:

   > `npx nombre-cli init`

>[!IMPORTANT]
>Don't forget to install your project's dependencies.
>```bash
>npm install
>```


3. Create as many scripts as needed based on the number of vendors you have.
![Code_zB2Q1EHzjS](https://github.com/user-attachments/assets/379ae38e-c65f-4fb3-803d-aa159a6468a5)

4. Modify the object you’ll pass as an argument according to the invoice’s structure and how the information appears — keep in mind that `pdf-parse` returns the content line by line.
<img width="570" alt="chrome_pQTw7TVJqk" src="https://github.com/user-attachments/assets/ad72192d-efb3-459a-bae0-855e0868f819" />




5. Adjust the regex for each value you need to extract.
<img width="410" alt="Code_z50d1ZEgpG" src="https://github.com/user-attachments/assets/ce1da208-47f8-414d-a097-ac2f3dc74442" />

6. Modify the JSON structure based on the vendor, or add new ones if necessary.
<img width="346" alt="Code_yEiTG8adFJ" src="https://github.com/user-attachments/assets/18768399-06e4-419f-bb03-595ab0b9ff59" />

>[!IMPORTANT]
>Remember that for each new TypeScript file you create, you need to run the command npm run build to generate its corresponding JavaScript file in the ./dist folder..


7. Place your supplier's invoices in the 'pdfs' folder. Remember that invoices from different suppliers must not be mixed. Therefore, to use the script, only the invoices from that specific supplier should be in the folder (Delete the .gitignore file).

8. Run the script and pick up the csv document in the folder "result".






### LINKS
