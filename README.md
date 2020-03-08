# Context and goal

I have done this application for an interview. This application fetchs list of movies from https://www.themoviedb.org/ API.
It's made with React Native, coupled with some extra nice packages to handle routing, dataflow and UI elements.
Redx has be used for state management.

## Main technologies used

- [React Native](https://github.com/facebook/react-native)

> A framework for building native apps with React.

- [Redux](http://redux.js.org/)

> Redux is a predictable state container for JavaScript apps.

- [React Native Elements](https://github.com/react-native-community/react-native-elements)

> Cross Platform React Native UI Toolkit

- [React Navigation](https://github.com/react-navigation/react-navigation)

> Routing and navigation for your React Native apps.

## Running the project

- Clone this project
```
git clone < project-url.git >
```

- [Install NodeJS](https://nodejs.org/en/) on your computer.

- [Install yarn](https://yarnpkg.com/en/docs/install) on your computer
> Yarn is a dependency manager built by facebook and google. It is a more efficient and reliable (thanks to yarn.lock) alternative of npm.

- Launch ``` yarn ``` command in a terminal opened in the project folder.
> This command will look into the *package.json* file and install all the dependencies listed here.

- Install react-native-cli globally on your computer
```
yarn global add react-native-cli
```

### Android steps

- Launch a virtual android device [(through *Android Studio* for instance)](https://developer.android.com/studio/run/managing-avds.html#viewing)

> If you have never installed any android virtual device, [follow those instructions](https://developer.android.com/studio/run/managing-avds.html#createavd)

- Then, run the project in executing on your project folder:

```
react-native run-android
```
### IOS steps (This App is not tested in ios devices)

- Extra step required 

```
cd ios && pod install && cd ..
```

- Then, run the project in executing on your project folder:

```
react-native run-ios
```
