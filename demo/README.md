#系统使用说明

##大数据技术与实践-电商数据分析系统


###数据获取

1.	本地安装[python运行环境](www.python.org)

2.	安装requests库、re库、BeautifulSoup库、selenium库、lxml库。（网上查找python相关库安装教程）。

3.	运行文件`car.py`，在项目路径生成文件`Model_ID.txt`。

4.	运行文件`car2.py`，在项目路径生成文件`allurls.txt`。

5.	新建一个文件`allurls_new.txt`。从`allurls.txt`中选取需要爬取的url复制到`allurls_new.txt`。（如果所有需要则全部复制）

6.	修改文件`car3.py`中`chrome_driver=r"C:\Users\74897\.PyCharm2018.2\config\scratches\chromedriver.exe"`

8.	将上面浏览器路径换为使用者电脑中浏览器路径。

9.	运行`car3.py`，在项目路径将生成文件`cartest.txt`，则得到需要的汽车参数信息。（该过程需要时间较长，请耐心等待）

10.	运行文件`get_sale.py`，得到网站上在销售的汽车近24个月的销量，并保存在文件`sale.txt`中。

11.	将`cartest.txt`和`sale.txt`中的中文改成英文，并处理格式，使文件转化成json文件格式，以便后续数据处理分析。


###前端搭建

1.	本地安装[node.js](https://nodejs.org/en/download/)

2.	本地安装[npm包管理工具](https://www.npmjs.com/)

3.	解压文件untitled3，切换到项目路径之下，命令行执行代码 `npm install`下载更新项目所需要的包

4.	执行`npm run dev`启动项目

5.	Chorme浏览器或FireFox浏览器打开，地址栏输入[http://localhost:8080](http://localhost:8080)即可访问（不建议使用IE浏览器）


###后端搭建

1. 本地安装[Golang语言环境](https://golang.org/dl/).

2. 解压文件awesomeProject，切换到项目路径之下，命令行执行代码`go build main.go`启动项目.

3. 成功后可看到控制台打印服务运行信息

###数据分析

1. 本地安装[python环境](https://www.python.org/)

2. 解压文件Statistic，切换到项目路径之下,执行代码`python + 项目工作路径`即可执行


