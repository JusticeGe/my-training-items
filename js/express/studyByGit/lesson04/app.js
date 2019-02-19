var express = require('express')
var superagent = require('superagent')
var cheerio = require('cheerio')
var url = require('url')
var eventproxy = require('eventproxy')

var cNodeUrl = 'https://cnodejs.org/';

var ep = new eventproxy()
superagent.get(cNodeUrl).end(function (err, res) {
  if (err) {
    return console.error(err)
  }
  var topicUrls = []
  var $ = cheerio.load(res.text)
  $('#topic_list .topic_title').each(function (idx, element) {
    var $element = $(element)
    var href = url.resolve(cNodeUrl, $element.attr('href'))
    topicUrls.push(href)
  })
  ep.after('topic.html', topicUrls.length, function (topics) {
    topics = topics.map(function (topicPair) {
      var topicUrl = topicPair[0]
      var topicHtml = topicPair[1]
      var $ = cheerio.load(topicHtml)
      return ({
        title: $()
      })
    })
  })
})