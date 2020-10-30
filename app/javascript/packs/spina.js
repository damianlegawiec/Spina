// Rails and turbolinks
require("@rails/ujs").start()
require("turbolinks").start()

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

// Import CSS
import '../stylesheets/spina.scss'