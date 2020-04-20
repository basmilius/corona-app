<template>

	<div class="container mt-10 mb-5">
		<img src="@/assets/image/hero/home.svg" alt="Connection" class="mx-auto" style="height: 180px;"/>
		<div class="panel">
			<div class="d-flex flex-row">
				<div class="panel-body">
					<h1 class="h5 text-primary m-0">Tracken</h1>
					<p class="m-0">Tracken staat op dit moment aan.</p>
				</div>
				<div class="panel-body flex-grow-0">
					<Toggle is-checked/>
				</div>
			</div>
			<Divider is-horizontal/>
			<div class="panel-body">
				<p class="text-muted">
					Door tracken aan te zetten houd je telefoon bij of je in de buurt bent geweest van mensen die nu symptomen hebben van Corona.
				</p>
			</div>
		</div>

		<div class="panel list mt-5 py-3">
			<div class="list-item">
				<div class="list-item-column pr-0 text-error">
					<Icon name="far exclamation-triangle" style="font-size: 21px"/>
				</div>
				<div class="list-item-column flex-grow-1">
					<h2 class="h6 m-0 text-error">Meld Corona</h2>
					<p class="m-0">Laat het ons weten als er Corona bij je is vastgesteld.</p>
				</div>
				<div class="list-item-column">
					<Icon name="fad angle-right" style="font-size: 21px"/>
				</div>
			</div>
		</div>
	</div>

</template>

<script lang="ts">

	import { Component, Vue } from "vue-property-decorator";

	import { Divider, Icon, Toggle } from "@latte-ui/core/src/lib/component";

	@Component({
		components: {Divider, Icon, Toggle}
	})
	export default class ApplicationHomeView extends Vue
	{
	}

</script>
