/* */ 
(function() {
  var ref$,
      id,
      find,
      sort,
      min,
      max,
      map,
      unlines,
      nameToRaw,
      dasherize,
      naturalJoin,
      wordwrap,
      getPreText,
      setHelpStyleDefaults,
      generateHelpForOption,
      generateHelp;
  ref$ = require('prelude-ls'), id = ref$.id, find = ref$.find, sort = ref$.sort, min = ref$.min, max = ref$.max, map = ref$.map, unlines = ref$.unlines;
  ref$ = require('./util'), nameToRaw = ref$.nameToRaw, dasherize = ref$.dasherize, naturalJoin = ref$.naturalJoin;
  wordwrap = require('wordwrap');
  getPreText = function(option, arg$, maxWidth) {
    var mainName,
        shortNames,
        ref$,
        longNames,
        type,
        description,
        aliasSeparator,
        typeSeparator,
        initialIndent,
        names,
        namesString,
        namesStringLen,
        typeSeparatorString,
        typeSeparatorStringLen,
        wrap;
    mainName = option.option, shortNames = (ref$ = option.shortNames) != null ? ref$ : [], longNames = (ref$ = option.longNames) != null ? ref$ : [], type = option.type, description = option.description;
    aliasSeparator = arg$.aliasSeparator, typeSeparator = arg$.typeSeparator, initialIndent = arg$.initialIndent;
    if (option.negateName) {
      mainName = "no-" + mainName;
      if (longNames) {
        longNames = map(function(it) {
          return "no-" + it;
        }, longNames);
      }
    }
    names = mainName.length === 1 ? [mainName].concat(shortNames, longNames) : shortNames.concat([mainName], longNames);
    namesString = map(nameToRaw, names).join(aliasSeparator);
    namesStringLen = namesString.length;
    typeSeparatorString = mainName === 'NUM' ? '::' : typeSeparator;
    typeSeparatorStringLen = typeSeparatorString.length;
    if (maxWidth != null && !option.boolean && initialIndent + namesStringLen + typeSeparatorStringLen + type.length > maxWidth) {
      wrap = wordwrap(initialIndent + namesStringLen + typeSeparatorStringLen, maxWidth);
      return namesString + "" + typeSeparatorString + wrap(type).replace(/^\s+/, '');
    } else {
      return namesString + "" + (option.boolean ? '' : typeSeparatorString + "" + type);
    }
  };
  setHelpStyleDefaults = function(helpStyle) {
    helpStyle.aliasSeparator == null && (helpStyle.aliasSeparator = ', ');
    helpStyle.typeSeparator == null && (helpStyle.typeSeparator = ' ');
    helpStyle.descriptionSeparator == null && (helpStyle.descriptionSeparator = '  ');
    helpStyle.initialIndent == null && (helpStyle.initialIndent = 2);
    helpStyle.secondaryIndent == null && (helpStyle.secondaryIndent = 4);
    helpStyle.maxPadFactor == null && (helpStyle.maxPadFactor = 1.5);
  };
  generateHelpForOption = function(getOption, arg$) {
    var stdout,
        helpStyle,
        ref$;
    stdout = arg$.stdout, helpStyle = (ref$ = arg$.helpStyle) != null ? ref$ : {};
    setHelpStyleDefaults(helpStyle);
    return function(optionName) {
      var maxWidth,
          wrap,
          option,
          e,
          pre,
          defaultString,
          restPositionalString,
          description,
          fullDescription,
          that,
          preDescription,
          descriptionString,
          exampleString,
          examples,
          seperator;
      maxWidth = stdout != null && stdout.isTTY ? stdout.columns - 1 : null;
      wrap = maxWidth ? wordwrap(maxWidth) : id;
      try {
        option = getOption(dasherize(optionName));
      } catch (e$) {
        e = e$;
        return e.message;
      }
      pre = getPreText(option, helpStyle);
      defaultString = option['default'] && !option.negateName ? "\ndefault: " + option['default'] : '';
      restPositionalString = option.restPositional ? 'Everything after this option is considered a positional argument, even if it looks like an option.' : '';
      description = option.longDescription || option.description && sentencize(option.description);
      fullDescription = description && restPositionalString ? description + " " + restPositionalString : (that = description || restPositionalString) ? that : '';
      preDescription = 'description:';
      descriptionString = !fullDescription ? '' : maxWidth && fullDescription.length - 1 - preDescription.length > maxWidth ? "\n" + preDescription + "\n" + wrap(fullDescription) : "\n" + preDescription + " " + fullDescription;
      exampleString = (that = option.example) ? (examples = [].concat(that), examples.length > 1 ? "\nexamples:\n" + unlines(examples) : "\nexample: " + examples[0]) : '';
      seperator = defaultString || descriptionString || exampleString ? "\n" + repeatString$('=', pre.length) : '';
      return pre + "" + seperator + defaultString + descriptionString + exampleString;
    };
  };
  generateHelp = function(arg$) {
    var options,
        prepend,
        append,
        helpStyle,
        ref$,
        stdout,
        aliasSeparator,
        typeSeparator,
        descriptionSeparator,
        maxPadFactor,
        initialIndent,
        secondaryIndent;
    options = arg$.options, prepend = arg$.prepend, append = arg$.append, helpStyle = (ref$ = arg$.helpStyle) != null ? ref$ : {}, stdout = arg$.stdout;
    setHelpStyleDefaults(helpStyle);
    aliasSeparator = helpStyle.aliasSeparator, typeSeparator = helpStyle.typeSeparator, descriptionSeparator = helpStyle.descriptionSeparator, maxPadFactor = helpStyle.maxPadFactor, initialIndent = helpStyle.initialIndent, secondaryIndent = helpStyle.secondaryIndent;
    return function(arg$) {
      var ref$,
          showHidden,
          interpolate,
          maxWidth,
          output,
          out,
          data,
          optionCount,
          totalPreLen,
          preLens,
          i$,
          len$,
          item,
          that,
          pre,
          descParts,
          desc,
          preLen,
          sortedPreLens,
          maxPreLen,
          preLenMean,
          x,
          padAmount,
          descSepLen,
          fullWrapCount,
          partialWrapCount,
          descLen,
          totalLen,
          initialSpace,
          wrapAllFull,
          i,
          wrap;
      ref$ = arg$ != null ? arg$ : {}, showHidden = ref$.showHidden, interpolate = ref$.interpolate;
      maxWidth = stdout != null && stdout.isTTY ? stdout.columns - 1 : null;
      output = [];
      out = function(it) {
        return output.push(it != null ? it : '');
      };
      if (prepend) {
        out(interpolate ? interp(prepend, interpolate) : prepend);
        out();
      }
      data = [];
      optionCount = 0;
      totalPreLen = 0;
      preLens = [];
      for (i$ = 0, len$ = (ref$ = options).length; i$ < len$; ++i$) {
        item = ref$[i$];
        if (showHidden || !item.hidden) {
          if (that = item.heading) {
            data.push({
              type: 'heading',
              value: that
            });
          } else {
            pre = getPreText(item, helpStyle, maxWidth);
            descParts = [];
            if ((that = item.description) != null) {
              descParts.push(that);
            }
            if (that = item['enum']) {
              descParts.push("either: " + naturalJoin(that));
            }
            if (item['default'] && !item.negateName) {
              descParts.push("default: " + item['default']);
            }
            desc = descParts.join(' - ');
            data.push({
              type: 'option',
              pre: pre,
              desc: desc,
              descLen: desc.length
            });
            preLen = pre.length;
            optionCount++;
            totalPreLen += preLen;
            preLens.push(preLen);
          }
        }
      }
      sortedPreLens = sort(preLens);
      maxPreLen = sortedPreLens[sortedPreLens.length - 1];
      preLenMean = initialIndent + totalPreLen / optionCount;
      x = optionCount > 2 ? min(preLenMean * maxPadFactor, maxPreLen) : maxPreLen;
      for (i$ = sortedPreLens.length - 1; i$ >= 0; --i$) {
        preLen = sortedPreLens[i$];
        if (preLen <= x) {
          padAmount = preLen;
          break;
        }
      }
      descSepLen = descriptionSeparator.length;
      if (maxWidth != null) {
        fullWrapCount = 0;
        partialWrapCount = 0;
        for (i$ = 0, len$ = data.length; i$ < len$; ++i$) {
          item = data[i$];
          if (item.type === 'option') {
            pre = item.pre, desc = item.desc, descLen = item.descLen;
            if (descLen === 0) {
              item.wrap = 'none';
            } else {
              preLen = max(padAmount, pre.length) + initialIndent + descSepLen;
              totalLen = preLen + descLen;
              if (totalLen > maxWidth) {
                if (descLen / 2.5 > maxWidth - preLen) {
                  fullWrapCount++;
                  item.wrap = 'full';
                } else {
                  partialWrapCount++;
                  item.wrap = 'partial';
                }
              } else {
                item.wrap = 'none';
              }
            }
          }
        }
      }
      initialSpace = repeatString$(' ', initialIndent);
      wrapAllFull = optionCount > 1 && fullWrapCount + partialWrapCount * 0.5 > optionCount * 0.5;
      for (i$ = 0, len$ = data.length; i$ < len$; ++i$) {
        i = i$;
        item = data[i$];
        if (item.type === 'heading') {
          if (i !== 0) {
            out();
          }
          out(item.value + ":");
        } else {
          pre = item.pre, desc = item.desc, descLen = item.descLen, wrap = item.wrap;
          if (maxWidth != null) {
            if (wrapAllFull || wrap === 'full') {
              wrap = wordwrap(initialIndent + secondaryIndent, maxWidth);
              out(initialSpace + "" + pre + "\n" + wrap(desc));
              continue;
            } else if (wrap === 'partial') {
              wrap = wordwrap(initialIndent + descSepLen + max(padAmount, pre.length), maxWidth);
              out(initialSpace + "" + pad(pre, padAmount) + descriptionSeparator + wrap(desc).replace(/^\s+/, ''));
              continue;
            }
          }
          if (descLen === 0) {
            out(initialSpace + "" + pre);
          } else {
            out(initialSpace + "" + pad(pre, padAmount) + descriptionSeparator + desc);
          }
        }
      }
      if (append) {
        out();
        out(interpolate ? interp(append, interpolate) : append);
      }
      return unlines(output);
    };
  };
  function pad(str, num) {
    var len,
        padAmount;
    len = str.length;
    padAmount = num - len;
    return str + "" + repeatString$(' ', padAmount > 0 ? padAmount : 0);
  }
  function sentencize(str) {
    var first,
        rest,
        period;
    first = str.charAt(0).toUpperCase();
    rest = str.slice(1);
    period = /[\.!\?]$/.test(str) ? '' : '.';
    return first + "" + rest + period;
  }
  function interp(string, object) {
    return string.replace(/{{([a-zA-Z$_][a-zA-Z$_0-9]*)}}/g, function(arg$, key) {
      var ref$;
      return (ref$ = object[key]) != null ? ref$ : "{{" + key + "}}";
    });
  }
  module.exports = {
    generateHelp: generateHelp,
    generateHelpForOption: generateHelpForOption
  };
  function repeatString$(str, n) {
    for (var r = ''; n > 0; (n >>= 1) && (str += str))
      if (n & 1)
        r += str;
    return r;
  }
}).call(this);
