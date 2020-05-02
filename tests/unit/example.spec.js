import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

import { shallowMount } from "@vue/test-utils";
import Search from "@/components/header/Search";

describe("Search", () => {
	it("resets the input field after search is completed", () => {
		const wrapper = shallowMount(Search);

		expect(true).toBe(false);
	});
});
