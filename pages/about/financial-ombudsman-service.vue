<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Financial Ombudsman Service</h4>
    <p class="grey--text"></p>
    <v-divider class="mb-4"></v-divider>
    <p>
      The Financial Ombudsman Service (FOS) is an independent service in the UK
      established by the Parliament for settling disputes between businesses
      providing financial services and their customers.
    </p>
    <p>
      Most complaints are resolved at an early stage, but if we are unable to
      satisfy your concerns you may be able to refer your case to the FOS. They
      will look into your complaint and provide you with a response.
    </p>
    <p>
      The FOS will make a determination after reviewing your complaint and all
      relevant issues, for example any relevant FCA rules. The FOS has the
      authority to resolve the complaint, and the Company will be bound by their
      determination. Should you decide to utilise the FOS, you can do so free of
      charge.
    </p>
    <p>You can contact the FOS in the following manner:</p>
    <p>
      By writing to:<br /> 
      Financial Ombudsman Service<br />
      South Quay Plaza,<br />
      183 Marsh Wall<br />
      London E14 9SR<br />
      United Kingdom<br />
      Phone: 0800 023 4567<br />
      Email: complaint.info@financial-ombudsman.org.uk<br />
      Web: http://www.financial-ombudsman.org.uk
    </p>
    <p>You can access a copy of the FOS explanatory leaflet at the following link: https://www.financial-ombudsman.org.uk/publications/consumer-leaflet.htm</p>
    <p>Please note that the FOS will not consider a complaint until we have had the opportunity to address the complaint, and any reference to FOS should not be made by you until you receive a final response from us or eight weeks after the date of your complaint, whichever is sooner.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: "About US",
          disabled: false,
          to: "/services/about-us",
        },
        {
          text: "Financial Ombudsman Service",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>