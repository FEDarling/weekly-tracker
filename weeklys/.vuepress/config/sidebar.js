const tool = require("./tool");

const css = {
	name: "CSS Weekly",
	path: "/css_weekly/",
	pages: {
		486: ["has_selector", "cutsom_properties"]
	}
}
const js = {
	name: "JavaScript Weekly",
	path: "/javascript_weekly/",
	pages: {
		399: ["js_engine_shape_and_inline_caches", "js_engine_optimizing_prototype"],
		523: ["undefined_VS_null"],
		554: ["ES2022_Feature_Class_Static_Initialization_Blocks"],
		570: ["build_tools_compare", "ES2021_new_feature", "svelte_vs_react", "ternary"]
	}
}
const front = {
	name: "Frontend Focus",
	path: "/frontend_focus/",
	pages: {
		523: ["frontend_web_performance"]
	}
}
const node = {
	name: "Node Weekly",
	path: "/node_weekly/",
	pages: {
		417: ["Nodejs_memory_limits_what_you_should_know"],
		419: ["Nodejs_Framework_Selection_Guide"]
	}
}
const react = {
	name: "React Status",
	path: "/react_status/",
	pages: {
		271: ["A_Visual_Guide_to_useEffect"]
	}
}
const mobile = {
	name: "Mobile Dev Weekly",
	path: "/mobile_dev_weekly/",
	pages: {
		382: ["webrtc"],
		383: ["bashful_button", "modile_first_or_desktop_first"]
	}
}

const result = tool.formatSideBar([css, js, front, react, mobile, node])

module.exports = result
// {

// 	[`${css.path}`]: [{
// 		title: 'CSS Weekly',
// 		children: [
// 			{
// 				title: '#486',
// 				collapsable: true,
// 				children: [
// 					`${css.path}486/toc.md`,
// 					`${css.path}486/cutsom_properties.md`,
// 					`${css.path}486/has_selector.md`
// 				]
// 			}
// 		]
// 	}],
// 	// '/frontend_focus/': formatSideBar(front),
// 	// '/javascript_weekly/': formatSideBar(js),
// 	// '/mobile_dev_weekly': formatSideBar(front)(mobile),
// 	// '/node_weekly/': formatSideBar(node),
// 	// '/react_status_weekly/': formatSideBar(react),
// }