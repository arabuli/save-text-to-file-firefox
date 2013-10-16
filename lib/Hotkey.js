var { Hotkey } = require("sdk/hotkeys"),
	File = require("./File"),
	Selection = require("./Selection");

exports.attach = function() {
	
	Hotkey({
		combo: "shift-f1",
		onPress: function() {
			File.saveTo(File.getPathToFile(), File.createFileName(), Selection.getText());
		}
	});
}