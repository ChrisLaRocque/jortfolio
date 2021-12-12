<template>
  <div class="columns is-centered is-vcentered p-6">
    <div class="column is-one-third">
      <div class="content">
        <h1>About me</h1>
        <p>
          I'm a web developer based near Boston, MA with ~7 years experience
          building content oriented, user-first web applications.
        </p>
        <div class="buttons">
          <a
            href="mailto:larocque.christopher@gmail.com"
            class="button is-black"
            ><Icon name="Envelope" />&nbsp;<span
              style="display: block"
              class="ml-1"
              >Email</span
            ></a
          >
          <a href="https://github.com/ChrisLaRocque" class="button is-black"
            ><Icon name="Github" />&nbsp;<span
              style="display: block"
              class="ml-1"
              >Github</span
            ></a
          >
        </div>
      </div>
    </div>
    <div class="column is-one-third">
      <figure class="image">
        <img src="~/assets/img/headshot.jpeg" class="is-rounded" alt="" />
      </figure>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `About | Chris LaRocque`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `I'm a web developer based near Boston with experience building React and Vue framework based apps based around marketing orgs and user first design.`,
        },
      ],
    };
  },
};
</script>
