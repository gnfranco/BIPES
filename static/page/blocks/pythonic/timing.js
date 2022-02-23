Blockly.Python['delay'] = function(block) {
//Blockly.Python['utime.delay'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  var value_time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_NONE);
  var dropdown_scale = block.getFieldValue('SCALE');
  var code =  `time.${dropdown_scale}(${value_time})\n`;
  return code;
};

Blockly.Python['utime.vars'] = function(block) {

	//For Circuit Python
	if (UI ['workspace'].selector.value == "ESP32S2") {
		Blockly.Python.definitions_['import_time'] = 'import time';
		var code = "time.monotonic()";
	} else {
		Blockly.Python.definitions_['import_utime'] = 'import utime';
		var dropdown_vars = block.getFieldValue('VARS');
		var code =  `utime.${dropdown_vars}()`;
	}
	return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['utime.ticks_add'] = function(block) {
  Blockly.Python.definitions_['import_utime'] = 'import utime';
  var value_time1 = Blockly.Python.valueToCode(block, 'TIME1', Blockly.Python.ORDER_NONE);
  var value_time2 = Blockly.Python.valueToCode(block, 'TIME2', Blockly.Python.ORDER_NONE);

  var code =  `utime.ticks_add(${value_time1},${value_time2})`;
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Python['utime.ticks_diff'] = function(block) {
  Blockly.Python.definitions_['import_utime'] = 'import utime';
  var value_time1 = Blockly.Python.valueToCode(block, 'TIME1', Blockly.Python.ORDER_NONE);
  var value_time2 = Blockly.Python.valueToCode(block, 'TIME2', Blockly.Python.ORDER_NONE);

  var code =  `utime.ticks_diff(${value_time1},${value_time2})`;
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Python['utime.deadline'] = function(block) {
  Blockly.Python.definitions_['import_utime'] = 'import utime';

  var value_id = block.getFieldValue('ID');
  var value_time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_NONE);
  var dropdown_scale = block.getFieldValue('SCALE');
  var statements_do = Blockly.Python.statementToCode(block, 'DO');

  var code = `deadline${value_id} = utime.ticks_add(utime.${dropdown_scale}(), ${value_time})\nwhile utime.ticks_diff(deadline${value_id}, utime.${dropdown_scale}()) > 0:\n${statements_do}\n`;
  return code;
};

Blockly.Python['esp32_get_rtc'] = function(block) {
  Blockly.Python.definitions_['import_rtc'] = 'from machine import RTC';
  Blockly.Python.definitions_['import_rtc_def'] = 'rtc = RTC()';

  var code = 'rtc.datetime()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['esp8266_get_rtc'] = function(block) {
  Blockly.Python.definitions_['import_rtc'] = 'from machine import RTC';
  Blockly.Python.definitions_['import_rtc_def'] = 'rtc = RTC()';

  var code = 'rtc.datetime()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['esp32_set_rtc'] = function(block) {
  //var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_rtc'] = 'from machine import RTC';
  Blockly.Python.definitions_['import_rtc_def'] = 'rtc = RTC()';

  var y = Blockly.Python.valueToCode(block, 'year', Blockly.Python.ORDER_ATOMIC);
  var m = Blockly.Python.valueToCode(block, 'month', Blockly.Python.ORDER_ATOMIC);
  var d = Blockly.Python.valueToCode(block, 'day', Blockly.Python.ORDER_ATOMIC);
  var h = Blockly.Python.valueToCode(block, 'hour', Blockly.Python.ORDER_ATOMIC);
  var min = Blockly.Python.valueToCode(block, 'minute', Blockly.Python.ORDER_ATOMIC);
  var s = Blockly.Python.valueToCode(block, 'second', Blockly.Python.ORDER_ATOMIC);

  var code = 'rtc.datetime((' + y + ',' + m + ',' + d + ',0,' + h + ',' + min + ',' + s + ',0))\n';
  return code;
};


Blockly.Python['esp8266_set_rtc'] = function(block) {
  //var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_rtc'] = 'from machine import RTC';
  Blockly.Python.definitions_['import_rtc_def'] = 'rtc = RTC()';

  var y = Blockly.Python.valueToCode(block, 'year', Blockly.Python.ORDER_ATOMIC);
  var m = Blockly.Python.valueToCode(block, 'month', Blockly.Python.ORDER_ATOMIC);
  var d = Blockly.Python.valueToCode(block, 'day', Blockly.Python.ORDER_ATOMIC);
  var h = Blockly.Python.valueToCode(block, 'hour', Blockly.Python.ORDER_ATOMIC);
  var min = Blockly.Python.valueToCode(block, 'minute', Blockly.Python.ORDER_ATOMIC);
  var s = Blockly.Python.valueToCode(block, 'second', Blockly.Python.ORDER_ATOMIC);

  var code = 'rtc.datetime((' + y + ',' + m + ',' + d + ',0,' + h + ',' + min + ',' + s + ',0))\n';
  return code;
};

Blockly.Python['delay_ms'] = function(block) {
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'time.sleep_ms(' + value_time + ')\n';
  return code;
};

Blockly.Python['delay_us'] = function(block) {
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'time.sleep_us(' + value_time + ')\n';
  return code;
};


Blockly.Python['ticks_ms'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = 'time.ticks_ms()\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ticks_diff'] = function(block) {
  var value_start = Blockly.Python.valueToCode(block, 'start', Blockly.Python.ORDER_ATOMIC);
  var value_end = Blockly.Python.valueToCode(block, 'end', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_time'] = 'import time';

  value_start=value_start.split('\n').join('');
  value_end=value_end.split('\n').join('');

  var code = 'time.ticks_diff(' + value_end + ',' + value_start + ')\n';
  return [code, Blockly.Python.ORDER_NONE];

};

Blockly.Python['stop_timer'] = function(block) {
  Blockly.Python.definitions_['import_timer'] = 'from machine import Timer';

  var tn = Blockly.Python.valueToCode(block, 'timerNumber', Blockly.Python.ORDER_ATOMIC);
  var code = 'tim' + tn + '.deinit()\n';

  return code;
};

Blockly.Python['deep_sleep8266'] = function(block) {
	var value_interval = Blockly.Python.valueToCode(block, 'interval', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = 'rtc = machine.RTC()\n';
	code += 'rtc.irq(trigger=rtc.ALARM0, wake=machine.DEEPSLEEP)\n';
	code += 'rtc.alarm(rtc.ALARM0, ' + value_interval + ')\n';
	code += 'machine.deepsleep()\n';
	return code;
};