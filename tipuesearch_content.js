var tipuesearch = {"pages":[{"title":"Behind the scene : Wallspyder bots","text":"Python is really interesting, isn't it? Here is one of my opensource project for the programming community for just fun. wallspyder Wallspyder package is a collection of selenium webdriver automation scripts which let you query and download images silently using Chrome or Firefox browser. The package is including support for following websites Unslash Pexels WallpaperFlare How to use Using the package is very simple just install or clone the repo from Github install the package from git pip install git + https : // github . com / manojap / wallspyder . git #import package from wallspyder import pexels pexels . search ( 'fruits' ) . download () Interested in the project ?, have a look @ wallspyder","tags":"selenium,python","url":"https://manojap.github.io/behind-the-scene-wallspyder-bots.html","loc":"https://manojap.github.io/behind-the-scene-wallspyder-bots.html"},{"title":"Wallspyder bots","text":"Let the pexels bot work for you and bring some materials for design works. There is also a bot for unsplash.com too. There are plenty of materials for web and design works, no more worry of browsing and downloading, Python can help you. All you need is Python installed on your computer and a small script.","tags":"[blog]","url":"https://manojap.github.io/wallspyder-bots.html","loc":"https://manojap.github.io/wallspyder-bots.html"},{"title":"str.format","text":"str.format() In Python you can format string in a variety of ways.We learned how to use a %format technique in last post . In Python version 2.6 introduced str.format() function which is an improvement over % formatting. It uses { }, curly braces for replacement fields spyder_version = 3 python_version = 2 . 7 print ( 'I am using Spyder ID {} with Python {}' . format ( spyder_version , python_version )) # Output I am using Spyder ID 3 with Python 2 . 7 You can access variable using digits starting from {0}-{n} as follows spyder_version=3 python_version=2.7 print('I am using Python {1} and Spyder IDE {0} for data science ' .format(spyder_version,python_version)) Output I am using Python 2.7 and Spyder IDE 3 for data science ```","tags":"Python","url":"https://manojap.github.io/strformat.html","loc":"https://manojap.github.io/strformat.html"},{"title":"date formatting","text":"Date formatting In Python you can format date string using following predefined strings , % y /% Y - Year % a / A Week Day % b / B Month and % d for day ``` The letter with lowercase ( % y / Y % ) gives you abbreviated values , ` say 20 for 2020 , Thu for Thursday ` etc ``` python >>> print ( today . strftime ( \"%y %b %a \" )) 20 Jun Thu >>> print ( today . strftime ( \" %a , %d ,%B,%y \" )) Thu , 18 , June , 20 Locale date Some times your application may be consumed by people for different localities or people from different countries, of course the date and time will be different. Python allows you to format date and time according to locale settings. >>> print ( today . strftime ( \" %c \" )) Thu Jun 18 00 : 00 : 00 2020 >>> print ( today . strftime ( \" %x \" )) 06 / 18 / 20 >>> print ( today . strftime ( \" %X \" )) Here %c stand for locale's date and time , %x for locale's time and %X for locale's date You can also use predefined string s for format time . %I/H for 12/24 Hour , %M for Minutes , %S for second and % p for locales's AM/PM","tags":"Python","url":"https://manojap.github.io/date-formatting.html","loc":"https://manojap.github.io/date-formatting.html"},{"title":"% formatting","text":"% formatting In Python you can format string in a variety of ways. Using the % symbol you can place string almost any where. print ( 'customer A bought %s Quantity of Goods at %s unit price' % ( qty , price )) #Output customer A bought 100 Quantity of Goods at 70 unit price","tags":"Python","url":"https://manojap.github.io/formatting.html","loc":"https://manojap.github.io/formatting.html"}]};