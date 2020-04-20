<template>

	<div id="app">
		<AppBar color="light">
			<AppBarRow>
				<Button color="primary" icon="far arrow-left" size="small" type="text"/>
				<AppBarTitle class="mx-auto text-secondary weight-bold" title="Corona Tracker"/>
				<Button color="primary" icon="far ellipsis-v" size="small" type="text" ref="optionsMenuButton"/>
			</AppBarRow>
		</AppBar>

		<RouterView/>

		<Sheet :opener="$refs.optionsMenuButton" location="bottom" ref="optionsMenuSheet">
			<div class="panel m-4">
				<Nav type="list">
					<NavItem icon="fab bluetooth" label="Wat tracken we"/>
					<Divider is-horizontal/>
					<NavItem icon="far user-friends" label="Bekijk contact"/>
					<NavItem icon="far trash-alt" label="Verwijder contact"/>
					<Divider is-horizontal/>
					<NavItem icon="far info-circle" label="Over deze app" :to="{name: 'about'}" @click="$refs.optionsMenuSheet.close()"/>
				</Nav>
			</div>
		</Sheet>
	</div>

</template>

<script lang="ts">

	import { Component, Vue } from "vue-property-decorator";
	import { AppBar, AppBarRow, AppBarTitle, Button, Divider, Nav, NavItem, Sheet } from "@latte-ui/core/src/lib/component";

	@Component({
		components: {AppBar, AppBarRow, AppBarTitle, Button, Divider, Nav, NavItem, Sheet},
		refs: ["optionsMenuButton"]
	})
	export default class ApplicationView extends Vue
	{

		public $refs!: {
			optionsMenuButton: Button,
			optionsMenuSheet: Sheet
		};

	}

</script>
