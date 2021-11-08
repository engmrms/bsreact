import { JL } from 'jsnlog';

import { Globals } from './Globals';

const init = () => {
  /* preparing conention with server to send log */
  const logger = JL();
  const appender = JL.createAjaxAppender('ajax');
  appender.setOptions({
    url: Globals.LOG_URL,
    bufferSize: 20,
    storeInBufferLevel: JL.getDebugLevel(),
    level: JL.getFatalLevel(),
    sendWithBufferLevel: JL.getFatalLevel(),
    // "userAgentRegex": "MSIE 7|MSIE 8" only handle log on these Agent
    // "beforeSend": (xhr: XMLHttpRequest, json: any)=>{} lets you set a function that is called right before an AJAX request with log messages is sent to the server,
    enabled: Globals.DEBUG_MODE, // If false, all loggers are disabled.
  });
  logger.setOptions({ appenders: [appender] });

  /* override console error */

  const _error = console.error;
  console.error = errMessage => {
    logger.fatalException(errMessage);
    // eslint-disable-next-line no-undef
    _error.apply(console, arguments);
  };
};

export default {
  init,
};
