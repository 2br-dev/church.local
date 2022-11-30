(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// ::: Initialization ::: =====================================================

$(function () {
  initEvents(); // Initialization of event listeners
  initFrameworks(); // Initialization of framework components
});

function initFrameworks() {
  // Map initialization
  if ($('#map').length) {
    loadScript('https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/build/ol.js', function () {
      initMap();
    });
  }

  // Lazy load images and videos
  $('.lazy').lazy();

  // MaterializeCSS ============================================================
  M.Modal.init(document.querySelectorAll('.modal')); // Modal
  M.Sidenav.init(document.querySelector('.sidenav')); // Sidenav
  M.Tooltip.init(document.querySelectorAll('.tooltipped')); // Tooltips
  M.Materialbox.init(document.querySelectorAll('.materialboxed')); // Materialbox

  // SwiperJS ==================================================================
  if ($('#calendar-events').length) {
    var calendarEvents = new Swiper('#calendar-events', {
      speed: 800,
      breakpoints: {
        400: {
          slidesPerView: 1,
          spaceBetween: 5
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 5
        },
        1900: {
          slidesPerView: 3,
          spaceBetween: 5
        }
      },
      pagination: {
        el: '#calendar-pagination',
        type: 'bullets',
        dynamicBullets: true,
        dynamicMainBullets: 4,
        clickable: true
      },
      loop: true,
      navigation: {
        nextEl: '.ce-next',
        prevEl: '.ce-prev'
      }
    });
  }
  if ($('#nearest-events').length) {
    var nearestEvents = new Swiper('#nearest-events', {
      spaceBetween: 20,
      pagination: {
        type: 'bullets',
        el: '#events-pagination',
        clickable: true
      },
      on: {
        'init': updateBackground,
        'slideChange': function slideChange() {
          $('.lazy').lazy();
        },
        'slideChangeTransitionEnd': updateBackground
      }
    });
  }
  if ($('#social-services-swiper').length) {
    $('#social-services-swiper .swiper-slide').each(function (index, el) {
      $(el).attr('data-slide', index);
    });
    $('.slider-pages li').each(function (index, el) {
      $(el).attr("data-slide", index);
    });
    var socialSlider = new Swiper('#social-services-swiper', {
      mousewheel: true,
      pagination: {
        type: 'bullets',
        el: '#social-pagination'
      },
      on: {
        'slideChange': function slideChange(slider) {
          $('.lazy').lazy();
        },
        'beforeTransitionStart': function beforeTransitionStart(slider, speed, internal) {
          var index = slider.activeIndex;
          $('#social-services [data-slide]').removeClass('active');
          $('#social-services [data-slide=' + index + ']').addClass('active');
          $('#social-label').text(slider.activeIndex + 1 + " / " + slider.slides.length);
        },
        'init': function init(slider) {
          $('#social-services [data-slide=0]').addClass('active');
          $('#social-label').text("1 / " + slider.slides.length);
        }
      }
    });
  }
  if ($('#yough-slider').length) {
    $('#yough-slider .swiper-slide').each(function (index, el) {
      $(el).attr('data-index', index);
    });
    $('.yough-pages .lazy').each(function (index, el) {
      $(el).attr("data-index", index);
    });
    var youghSlider = new Swiper('#yough-slider', {
      on: {
        'slideChangeTransitionEnd': function slideChangeTransitionEnd() {
          $('.lazy').lazy();
        },
        'init': function init(slider) {
          $('.yough-page[data-index=0]').addClass('active');
        },
        'beforeTransitionStart': function beforeTransitionStart(slider) {
          var index = slider.activeIndex;
          $('.yough-page').removeClass('active');
          $('.yough-page[data-index=' + index + ']').addClass('active');
        }
      }
    });
  }
  if ($('#blog-popular').length) {
    var blog_popular = new Swiper('#blog-popular', {
      spaceBetween: 16 * 2.5,
      loop: true,
      speed: 800,
      breakpoints: {
        400: {
          slidesPerView: 1
        },
        900: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        },
        1900: {
          slidesPerView: 4
        }
      },
      autoplay: {
        delay: 5000
      },
      on: {
        'slideChange': function slideChange() {
          $('.lazy').lazy();
        }
      }
    });
  }
}
function initEvents() {
  $('body').on('mouseenter', 'nav>ul>li>a', openMegaMenu);
  $('body').on('mouseleave', 'mega-menu', closeMegamenu);
  $('body').on('mouseleave', 'header', closeMegamenu);
  $('body').on('mouseenter', '#menu-content a', openSubLevel);
  $('body').on('click', '.sidenav .folder > a, #mobile-navi .folder > a', toggleFolder);
  $('body').on('click', '#social-services [data-slide]', openServiceSlide);
  $('body').on('click', '.yough-page', openYoughSlide);
  $('body').on('click', '.preys-wrapper label', openNames);
  $('body').on('click', '.prey-back', closeNames);
  $('body').on('change', '[name="prey-type"]', switchNoteType);
  $('body').on('click', '#prey-add', preyAdd);
  $('body').on('click', '#prey-copy', preyCopy);
  $('body').on('click', '#prey-paste', preyPaste);
  $('body').on('click', '#prey-clear', preyClear);
}
function preyAdd(e) {
  e.preventDefault();
  var extra_fields = generateFields();
  $('.names-wrapper').append(extra_fields);
}
function preyCopy(e) {
  e.preventDefault();
  var text = "";
  $('.names-wrapper input').each(function (index, el) {
    text += el.value + "\r\n";
  });
  navigator.clipboard.writeText(text);
  M.toast({
    html: "Имена скопированы в буфер обмена!"
  });
}
function preyPaste(_x) {
  return _preyPaste.apply(this, arguments);
}
function _preyPaste() {
  _preyPaste = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
    var clipboardText, clipboardArray, $inputs, message, i;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            _context.prev = 1;
            _context.next = 4;
            return navigator.clipboard.readText();
          case 4:
            clipboardText = _context.sent;
            clipboardArray = clipboardText.split("\r\n");
            $inputs = $('.names-wrapper input');
            message = "Данные успешно вставлены!";
            for (i = 0; i < clipboardArray.length - 1; i++) {
              if ($inputs[i]) {
                $inputs[i].value = clipboardArray[i];
              } else {
                message = "Не для всех данных нашлись поля! Попробуйте очистить список, добавить нужное количество полей и повторите вставку!";
              }
            }
            M.toast({
              html: message
            });
            _context.next = 16;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            M.toast({
              html: "Ошибка вставки!"
            });
            console.error(_context.t0.message);
          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));
  return _preyPaste.apply(this, arguments);
}
function preyClear(e) {
  e.preventDefault();
  var extra_fields = generateFields();
  $('.names-wrapper').empty().append(extra_fields);
}
function generateFields(e) {
  var $input_field = $('<div class="input-field"></div>');
  var $prefix = $('<div class="prefix"></div>');
  var $input = $('<input type="text" name="names[]">');
  var $indicator = $('<div class="indicator"></div>');
  var $element = $input_field.append($prefix).append($input).append($indicator);
  var element = $element[0].outerHTML;
  var outputHTML = "";
  for (var i = 0; i < 10; i++) {
    outputHTML += element + "\r\n";
  }
  return $(outputHTML);
}

//::: Core functions ::: =======================================================

// Switch type of note
function switchNoteType() {
  var type = this.value;
  switch (type) {
    case "rest":
      $('#send-note').addClass('rest');
      break;
    default:
      $('#send-note').removeClass('rest');
      break;
  }
}

// Open names
function openNames() {
  $('.note-service').addClass('invisible');
  $('.note-names').addClass('visible');
}

// Close names
function closeNames() {
  $('.note-service').removeClass('invisible');
  $('.note-names').removeClass('visible');
}

// Map initialization
function initMap() {
  var coords = [38.974051, 45.041807];
  var zoom = 12.85;
  var style = new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [.5, 1],
      src: '/img/map_marker.png'
    })
  });
  var marker = new ol.Feature({
    type: 'icon',
    geometry: new ol.geom.Point(ol.proj.fromLonLat(coords))
  });
  var vectorSource = new ol.source.Vector({
    features: [marker]
  });
  var vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: style
  });

  // Shift map center to provide place for overlay
  var center = [coords[0], coords[1]];
  var map = new ol.Map({
    target: 'map',
    // The DOM element that will contains the map
    interactions: ol.interaction.defaults({
      mouseWheelZoom: false
    }),
    //Disable scroll event
    renderer: 'canvas',
    // Force the renderer to be used
    layers: [
    // Add a new Tile layer getting tiles from OpenStreetMap source
    new ol.layer.Tile({
      source: new ol.source.OSM({
        url: "https://basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}{r}.png"
      })
    }), vectorLayer],
    // Create a view centered on the specified location and zoom level

    view: new ol.View({
      center: ol.proj.fromLonLat(center),
      zoom: zoom
    })
  });

  // Эвент по клику на маркере
  map.on('click', function (evt) {
    var f = map.forEachFeatureAtPixel(evt.pixel, function (ft, layer) {
      return ft;
    });
    if (f && f.get('type') == 'icon') {
      var linkEl = $('<a href="https://goo.gl/maps/KQYmVFwvvH7FYZYZ6" target="_blank">Google</a>');
      $('#map').append(linkEl);
      linkEl[0].click();
      $(linkEl).remove();
    }
  });
  map.on("pointermove", function (evt) {
    var hit = this.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
      return true;
    });
    if (hit) {
      this.getTargetElement().style.cursor = 'pointer';
    } else {
      this.getTargetElement().style.cursor = '';
    }
  });
}

// Update slider background
function updateBackground() {
  var _this = this;
  setTimeout(function () {
    var slide = _this.el.querySelector('.swiper-slide-active');
    if (!slide) return;
    var background = slide.dataset['background'];
    $('.nearest-events').css({
      backgroundImage: "url(" + background + ")"
    });
  }, 80);
}

// Open yough slide
function openYoughSlide() {
  var index = this.dataset['index'];
  var swiper = document.querySelector('#yough-slider').swiper;
  swiper.slideTo(index);
}

// Goto service slide
function openServiceSlide() {
  var index = this.dataset.slide;
  var swiperElement = document.querySelector('#social-services-swiper');
  var swiper = swiperElement.swiper;
  swiper.slideTo(index);
}

// Toggle sidenav folder
function toggleFolder(e) {
  var unfolded = $(this).hasClass('unfolded');
  var $levelUl = $(this).parent().parent(); //UL, contained clicked
  var $levelLi = $levelUl.find('>li');
  if (!unfolded) {
    e.preventDefault();
    $('.folder a').removeClass('unfolded');
    $(this).addClass('unfolded');
    $levelLi.each(function (index, el) {
      $(el).find('ul').slideUp('fast');
    });
    $(this).next().slideDown('fast');
  }
}

// open Mega menu
function openMegaMenu() {
  var directionClass = edgeDetect();
  var headerText = $(this).text();
  var $subMenu = $(this).next();
  $('header nav>ul>li>a').removeClass('hover');
  $(this).addClass('hover');
  $("#l1").nextAll().empty();
  if ($subMenu.length) {
    $('#menu-header').text(headerText);
    $('#l1').html($subMenu.clone());
    $('.mega-menu').addClass(directionClass);
    setTimeout(function () {
      $('.mega-menu').css({
        transition: 'transform .4s, opacity .2s'
      });
      $('.mega-menu').addClass('visible');
    }, 80);
  } else {
    closeMegamenu(null, true);
  }
}

// load sub-level of Mega-menu
function openSubLevel() {
  var $levelDiv = $(this).parents('div');
  var $nextLevel = $(this).next().clone();
  var $nextWrapper = $levelDiv.next();
  var $nextAll = $levelDiv.nextAll();
  $nextAll.empty();
  $levelDiv.find('a').removeClass('hover');
  $(this).addClass('hover');
  $nextWrapper.html($nextLevel);
}

// close Mega-menu
function closeMegamenu(e) {
  var notRemoveHover = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (notRemoveHover === false) {
    $('header nav>ul>li>a').removeClass('hover');
  }
  $('.mega-menu').removeClass('visible');
  $('.mega-menu').removeClass('top').removeClass('bottom');
  $('.mega-menu').css({
    transition: 'none'
  });
  $('#menu-header').text('');
  $('#l1').empty();
  $('#l2').empty();
  $('#l3').empty();
  $('#l4').empty();
}

// detect direction of opening Mega-menu (top|bottom)
function edgeDetect() {
  var docHeight = window.innerHeight;
  var menu = document.querySelector('header');
  menu.style.position = "static";
  var top = menu.getBoundingClientRect().top;
  $(menu).css(_defineProperty({
    position: '-webkit-sticky'
  }, "position", 'sticky'));
  var scrollTop = $('html, body').scrollTop();
  var menuHeight = $('.mega-menu').height();
  var className = top + menuHeight <= docHeight ? 'bottom' : 'top';
  return className;
}

// load external script
function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) {
    //IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //Others
    script.onload = function () {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

},{}]},{},[1]);
