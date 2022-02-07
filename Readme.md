# React Native Boilerplate

## Using the boilerplate

To create a new project using the boilerplate:

- Clone this repository
- #### First, Switch to new branch (optional but recommended)
  `git checkout -b rename-app`
- Install the npm dependencies by running `yarn` or `npm install`
- #### Rename the React Native project (Without custom Bundle Identifier)

  `yarn run rename -- <YourProjectName>` or `npm run rename -- <YourProjectName>` (the default name is `boilerplate`)

  #### e.g. `yarn run react-native-rename “My App” -b com.org.myapp`

- #### Rename the React Native project (With custom Bundle Identifier, Android only. For iOS, please use Xcode)
  `yarn run rename -- <YourProjectName> -b <bundleIdentifier>` or `npm run rename -- <YourProjectName> -b <bundleIdentifier>` (the default name is `boilerplate`)
