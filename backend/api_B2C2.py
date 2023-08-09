from flask import Flask, jsonify
from flask_cors import CORS
import B2C2

app = Flask(__name__)
CORS(app, origins=['http://localhost:5173'])

@app.route('/api/checkBalance', methods=['POST'])
def checkBalance():
    try:
        roundGBP, roundUSDT = B2C2.checkBalance()
        return jsonify({"GBP": roundGBP, "USDT": roundUSDT}), 200
    except Exception as e:
        print(e)

@app.route('/api/checkPrice', methods=['POST'])
def checkPrice():
    data = B2C2.checkPrice()
    try:
        return jsonify(data), 200
    except Exception as e:
        print(e)

@app.route('/api/postOrder', methods=['POST'])
def postOrder(amount):
    data = B2C2.postOrder(amount)
    try:
        return jsonify(data), 200
    except Exception as e:
        print(e)

@app.route('/api/postOrder', methods=['POST'])
def checkLedger():
    data = B2C2.checkLedger()
    try:
        return jsonify(data), 200
    except Exception as e:
        print(e)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
