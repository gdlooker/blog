#### 使用typescript创建react- native项目

创建项目命令：

react-native init TsRnApp --template typescript

如果要再项目中使用 jsx的语法，需要将文件的后缀名改为.tsx  比如使用<></> 或者<Fragment></Fragment>这样的标签

### 引入第三方库

yarn add react-native-modal  //引入弹窗库

yarn add react-native-vector-icons //引入字体图标库

//由于是ts的 还需要引入一个

yarn add --dev @types/react-native-vector-icons



###### vscode支持typescript 插件

Typescript React code snippets

react-native link react-native-vector-icons