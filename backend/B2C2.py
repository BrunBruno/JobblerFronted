import requests
import json
import websockets
import asyncio
import uuid
import datetime


<<<<<<< HEAD
with open ("C:/Users/bulam/Documents/b2c2_key.txt", "r") as f:
=======
with open ("---", "r") as f:
>>>>>>> a991c3e2444d185c2651c9fb5a5a099a0e33145e
    api_token = f.read().strip()

headers = {'Authorization': 'Token %s' % api_token}

def checkBalance():
    response = requests.get('https://api.b2c2.net/balance/', headers=headers)
    data = response.json()
    GBP = data["GBP"]
    USDT = data["UST"]
    roundGBP = round(float(GBP), 4)
    roundUSDT = round(float(USDT), 4)
    return roundGBP, roundUSDT

async def checkPrice():
    ws_headers = [('Authorization', 'Token %s' % api_token)]
    try:
        async with websockets.connect('wss://socket.b2c2.net/quotes', extra_headers=ws_headers) as websocket:
            response = await websocket.recv()
            response_data = json.loads(response) # Assuming that the response is JSON.
            if 'ok' in response_data:
                print("Git")
            data1 = {
              "event": "subscribe",
              "instrument": "USTGBP.SPOT",
              "levels": [1],
              "tag": "8c14906f-4244-4b51-86bc-553711167960"  # Optional tag that gets returned in the response message
            }
            await websocket.send(json.dumps(data1))
            response = await websocket.recv()

            data2 = {
              "event": "subscribe",
              "instrument": "price",
              "levels": [1]
              # Optional tag that gets returned in the response message - "tag": random_uuid
            }
            await websocket.send(json.dumps(data2))
            response = await websocket.recv()
            response_dict = json.loads(response)
            data = response_dict["levels"]["buy"][0]["price"]
            return(data) 

    except Exception as e:
        print(f"An error occurred: {e}")

async def main():
    await checkPrice()

if __name__ == '__main__':
    asyncio.run(main())

def calculate_to_buy(fiat, crypto_price):
    fiat = float(fiat)
    crypto_price = float(crypto_price)
    return fiat / crypto_price

def postOrder(amount):
    random_uuid = str(uuid.uuid4())
    quantity = amount
    side = 'buy'
    instrument = 'USTGBP.SPOT'
    price = asyncio.run(checkPrice())
    executing_unit = 'API'
    valid_until = datetime.datetime.strftime(datetime.datetime.utcnow() + datetime.timedelta(seconds=10), '%Y-%m-%dT%H:%M:%S.%fZ')

    post_data = {
        'instrument': instrument,
        'side': side,
        'quantity': quantity,
        'client_order_id': random_uuid,
        'price': price,
        'order_type': 'FOK',
        'valid_until': valid_until,
        'executing_unit': executing_unit,
    }

    response = requests.post('https://api.b2c2.net/v2/order/', json=post_data, headers=headers)
    response = response.json()
    print(response)
    data = response['trades'][0]['trade_id']
    return data

def checkLedger():
    response = requests.get('https://api.b2c2.net/ledger/', headers=headers)
    data = response.json()
    bData = json.dumps(data, indent=4)
    print(bData)
    """found = False
    for item in data:
        if item['reference'] == postOrder():
            found = True
            break
    if found:
        print('found')
        return True
    else:
        print('NOT found')
        return False"""
    
def withdrawal():
    if checkLedger():
        post_data = {
        'amount': checkBalance()[1],
        'currency': 'UST',
        'destination_address': {
            'address_value': 'TCUKggUfHBvQyiArUTQxBcFhvKyWKLw6kM',
            'address_suffix': 'TRC20',
            'address_protocol': None
        }
        }

        response = requests.post('https://api.b2c2.net/withdrawal/', json=post_data, headers=headers)
        print(response.json())
        return response.json()
    else:
        print('Error', response.json())


def checkWithdrawals():
    response = requests.get('https://api.b2c2.net/withdrawal/', headers=headers)
    data = response.json()
    bData = json.dumps(data, indent=4)
    print(bData)

