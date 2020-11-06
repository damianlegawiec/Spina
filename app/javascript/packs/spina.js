// Rails and turbolinks
require("@rails/ujs").start()
require("turbolinks").start()

// Trix
window.Trix = require("trix")
require("./config/trix")

import { Application } from "stimulus"
import RevealController from "stimulus-reveal"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))
application.register('reveal', RevealController)

// Import CSS
import '../stylesheets/spina.scss'