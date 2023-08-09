from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
from io import StringIO
<<<<<<< HEAD:backend/api_sumsub.py
import Sumsub 
=======
import backend
>>>>>>> 0959d6183045cd9622ceb57ff5b5d1c437099418:APICALL.py

app = Flask(__name__)
CORS(app, origins=['http://localhost:5173'])

@app.route('/api/download_pdfs', methods=['POST'])
def download_pdfs():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    file_content = file.stream.read().decode('utf-8')
    file_string_io = StringIO(file_content)
    
    csv_reader = csv.reader(file_string_io, delimiter=';')
    
    next(csv_reader)  
    
    applicant_ids_list = [row[0] for row in csv_reader if row]

    Sumsub.download_multiple_pdfs(applicant_ids_list)

    return jsonify({"message": "PDFs downloaded successfully"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
