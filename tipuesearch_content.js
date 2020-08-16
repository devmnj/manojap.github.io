var tipuesearch = {"pages":[{"title":"pexelsbot","text":"Let the pexelsbot work for you and bring some materials for design works. There are plenty of materials for web and design works on on pexls.com as unsplash.com, a source for unlimited free stock images. pexelsbot can download images by using your chrome/Firefox browsers, so no more worry of browsing and downloading, Python can help you. All you need is Python installed on your computer and a small script. A sample script from pexlsbot import pexels pexels . search ( 'flowers' ) . download ()","tags":"python","url":"/pexelsbot.html","loc":"/pexelsbot.html"},{"title":"unsplashbot","text":"Let the unsplashbot work for you and bring some materials for design works. There are plenty of materials for web and design works on unsplash.com, a source for unlimited free stock images. unsplashbot can download images by using browser of your choice, so no more worry of browsing and downloading, Python can help you. All you need is Python installed on your computer and a small script. A sample script from unsplashbot import unsplash unsplash . search ( 'flowers' ) . download ()","tags":"python","url":"/unsplashbot.html","loc":"/unsplashbot.html"},{"title":"Rapid API request in Python","text":"This tutorial is similar to RapidAPI example found in the official blog, with one exception, this example is users request method instead of unirest package which is not available on RapidAPI blog. RapidAPI RapidAPI is a website which provides useful APIs (Application Programing Interface) like Yahoo Finance, Email Verification, Geolocation which can be used to add features to your websites and apps using variety of programming languages like Python, Java, .Net etc. Yahoo Finance example For creating application to show stock chart using YahooFinanceAPI and Python, we are go through the following Create a Rapid API Account Subscribe to Yahoo Finance to get the endpoint (Which is a URL for getting information) Create methods to connect API and Process data Draw Plot Install requirements Install required packages using pip. I suggest using Python virtual environment . pip install seaborn pandas Complete Source code import json from datetime import datetime import matplotlib.pyplot as plt import pandas as pd import requests import seaborn as sns from matplotlib import rcParams from past.builtins import raw_input RAPIDAPI_KEY = \"<YOUR_RAPIDAPI_KEY>\" RAPIDAPI_HOST = \"<YOUR_RAPIDAPI_ENDPOINT>\" symbol_string = \"\" inputdata = {} def fetchStockData ( symbol ): url = \"https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts\" querystring = { \"comparisons\" : \" %5E GDAXI%2C %5E FCHI\" , \"region\" : \"US\" , \"lang\" : \"en\" , \"symbol\" : symbol , \"interval\" : \"5m\" , \"range\" : \"1d\" } headers = { 'x-rapidapi-host' : \"apidojo-yahoo-finance-v1.p.rapidapi.com\" , 'x-rapidapi-key' : \"275d968795msheb0c2d90f2d7a32p1141eajsnef8c254e756a\" } response = requests . request ( \"GET\" , url , headers = headers , params = querystring ) if ( response . status_code == 200 ): return json . loads ( response . text ) else : return None def parseTimestamp ( inputdata ): timestamplist = [] timestamplist . extend ( inputdata [ \"chart\" ][ \"result\" ][ 0 ][ \"timestamp\" ]) timestamplist . extend ( inputdata [ \"chart\" ][ \"result\" ][ 0 ][ \"timestamp\" ]) calendertime = [] for ts in timestamplist : dt = datetime . fromtimestamp ( ts ) calendertime . append ( dt . strftime ( \"%m/ %d /%Y\" )) return calendertime def parseValues ( inputdata ): valueList = [] valueList . extend ( inputdata [ \"chart\" ][ \"result\" ][ 0 ][ \"indicators\" ][ \"quote\" ][ 0 ][ \"open\" ]) valueList . extend ( inputdata [ \"chart\" ][ \"result\" ][ 0 ][ \"indicators\" ][ \"quote\" ][ 0 ][ \"close\" ]) return valueList def attachEvents ( inputdata ): eventlist = [] for i in range ( 0 , len ( inputdata [ \"chart\" ][ \"result\" ][ 0 ][ \"timestamp\" ])): eventlist . append ( \"open\" ) for i in range ( 0 , len ( inputdata [ \"chart\" ][ \"result\" ][ 0 ][ \"timestamp\" ])): eventlist . append ( \"close\" ) return eventlist if __name__ == \"__main__\" : try : while len ( symbol_string ) <= 2 : symbol_string = raw_input ( \"Enter the stock symbol: \" ) retdata = fetchStockData ( symbol_string ) if ( None != inputdata ): inputdata [ \"Timestamp\" ] = parseTimestamp ( retdata ) inputdata [ \"Values\" ] = parseValues ( retdata ) inputdata [ \"Events\" ] = attachEvents ( retdata ) df = pd . DataFrame ( inputdata ) sns . set ( style = \"darkgrid\" ) rcParams [ 'figure.figsize' ] = 13 , 5 rcParams [ 'figure.subplot.bottom' ] = 0.2 ax = sns . lineplot ( x = \"Timestamp\" , y = \"Values\" , hue = \"Events\" , dashes = False , markers = True , data = df , sort = False ) ax . set_title ( 'Symbol: ' + symbol_string ) plt . xticks ( rotation = 45 , horizontalalignment = 'right' , fontweight = 'light' , fontsize = 'xx-small' ) plt . show () except Exception as e : print ( \"Error\" ) print ( e ) Output","tags":"Python","url":"/rapid-api-request-in-python.html","loc":"/rapid-api-request-in-python.html"},{"title":"str.format","text":"str.format() In Python you can format string in a variety of ways.We learned how to use a %format technique in last post . In Python version 2.6 introduced str.format() function which is an improvement over % formatting. It uses { }, curly braces for replacement fields spyder_version = 3 python_version = 2 . 7 print ( 'I am using Spyder ID {} with Python {}' . format ( spyder_version , python_version )) # Output I am using Spyder ID 3 with Python 2 . 7 You can access variable using digits starting from {0}-{n} as follows spyder_version=3 python_version=2.7 print('I am using Python {1} and Spyder IDE {0} for data science ' .format(spyder_version,python_version)) Output I am using Python 2.7 and Spyder IDE 3 for data science ```","tags":"Python","url":"/strformat.html","loc":"/strformat.html"},{"title":"date formatting","text":"Date formatting In Python you can format date string using following predefined strings , % y /% Y - Year % a / A Week Day % b / B Month and % d for day ``` The letter with lowercase ( % y / Y % ) gives you abbreviated values , ` say 20 for 2020 , Thu for Thursday ` etc ``` python >>> print ( today . strftime ( \"%y %b %a \" )) 20 Jun Thu >>> print ( today . strftime ( \" %a , %d ,%B,%y \" )) Thu , 18 , June , 20 Locale date Some times your application may be consumed by people for different localities or people from different countries, of course the date and time will be different. Python allows you to format date and time according to locale settings. >>> print ( today . strftime ( \" %c \" )) Thu Jun 18 00 : 00 : 00 2020 >>> print ( today . strftime ( \" %x \" )) 06 / 18 / 20 >>> print ( today . strftime ( \" %X \" )) Here %c stand for locale's date and time , %x for locale's time and %X for locale's date You can also use predefined string s for format time . %I/H for 12/24 Hour , %M for Minutes , %S for second and % p for locales's AM/PM","tags":"Python","url":"/date-formatting.html","loc":"/date-formatting.html"},{"title":"% formatting","text":"% formatting In Python you can format string in a variety of ways. Using the % symbol you can place string almost any where. print ( 'customer A bought %s Quantity of Goods at %s unit price' % ( qty , price )) #Output customer A bought 100 Quantity of Goods at 70 unit price","tags":"Python","url":"/formatting.html","loc":"/formatting.html"}]};