from Sumsub_auth import *
import os
import requests
import fitz
import json
from api_sumsub import *

def getApplicantData(applicant_id):
    url = SUMSUB_TEST_BASE_URL + '/resources/applicants/' + applicant_id + '/one'
    resp = sign_request(requests.Request('GET', url))
    s = requests.Session()
    response = s.send(resp, timeout=REQUEST_TIMEOUT)
    data = response.json()
    fdata = json.dumps(data, indent=4)
    creationDate = data["createdAt"]
    return(fdata, creationDate)

def extract_name_from_pdf(pdf_content):
    try:
        pdf_document = fitz.open(stream=pdf_content, filetype="pdf") 
        text = ""
        for page_num in range(pdf_document.page_count):
            page = pdf_document.load_page(page_num)
            text += page.get_text()

        first_name = None
        last_name = None
        lines = text.split('\n')
        for line in lines:
            if "First name: " in line:
                first_name = line.split("First name: ")[1]
            elif "Last name: " in line:
                last_name = line.split("Last name: ")[1]

            if first_name and last_name:
                break

        pdf_document.close() 
        return first_name, last_name
    except Exception as e:
        print(f"Error extracting name from PDF: {e}")
        return None, None


def getPDF(applicant_id, directory, applicant_info):
    url = SUMSUB_TEST_BASE_URL + '/resources/applicants/' + applicant_id + '/summary/report?report=applicantReport&lang=en'
    resp = sign_request(requests.Request('GET', url))
    s = requests.Session()
    response = s.send(resp, timeout=REQUEST_TIMEOUT)
    applicant_data = getApplicantData(applicant_id)[1].replace(':', '.')
    if response.status_code == 200 and response.headers['Content-Type'] == 'application/pdf':
        first_name, last_name = extract_name_from_pdf(response.content)
        folder_name = f"{first_name} {last_name}" if first_name and last_name else applicant_id
        folder_name_with_date = f"{folder_name}   {applicant_data}"
        folder_path = os.path.join(directory, folder_name_with_date)
        createFolder(folder_path)

        pdf_filename = f'{applicant_id}.pdf'
        pdf_path = os.path.join(folder_path, pdf_filename)
        with open(pdf_path, 'wb') as pdf_file:
            pdf_file.write(response.content)

        txt_filename = f'{applicant_id}.txt'
        txt_path = os.path.join(folder_path, txt_filename)
        with open(txt_path, 'w') as txt_file:
            txt_file.write(getApplicantData(applicant_id)[0])

    return response

def download_multiple_pdfs(applicant_ids_list):
    for ID in (applicant_ids_list):
        #print(ID)
        directory = f"C:\\Users\\bulam\\Desktop\\applicants"
        createFolder(directory)
        response = getPDF(ID, directory, getApplicantData(ID)[1])
        print(response)

def createFolder(directory):
    try:
        if not os.path.exists(directory):
            os.makedirs(directory)
    except OSError:
        print('Error: Creating directory. ' + directory)
