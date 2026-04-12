module.exports = {
  packagerConfig: {
    name:"Personal Activity Tracker",
    extraResource: [
      "react-app/dist"
    ]
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel'
    }
  ]
}