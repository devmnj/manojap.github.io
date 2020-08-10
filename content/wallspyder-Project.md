---
title: Behind the scene : Wallspyder bots 
date:   2020-8-9
categories: selenium,python
tags: how to,Python
Summary: Selenium automation with wallspyder bots
 
---


Python is really interesting, isn't it? Here is one of my opensource project for the programming community for just fun. 

## wallspyder
Wallspyder package is a collection of selenium webdriver automation scripts which let you query and download images silently using Chrome or Firefox browser. The package is including support for following websites

[Unslash](http://unsplash.com)
[Pexels](http://pexels.com)
[WallpaperFlare](http://wallpaperflae.com)
## How to use 
Using the package is very simple just install or clone the repo from Github

### install the package from git

```python
 pip install git+https://github.com/manojap/wallspyder.git
#import package
from wallspyder import pexels 
pexels.search('fruits').download()
```

Interested in the project  ?, have a look [@ wallspyder](https://github.com/manojap/wallspyder)
