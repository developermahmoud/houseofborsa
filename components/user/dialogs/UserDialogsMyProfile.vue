<template>
  <div>
    <v-dialog v-model="dialog" fullscreen hide-overlay>
      <v-card class="secondary">
        <v-toolbar flat class="secondary">
          <v-btn icon @click="$emit('close-dialog')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="ml-2">My Profile</v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-title> Client Information </v-card-title>
        <v-card-text>
          <v-simple-table dense class="secondary">
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>Title</td>
                  <td colspan="2">Mr.</td>
                </tr>
                <tr>
                  <td>Full Name</td>
                  <td colspan="2">Anas Alazem</td>
                </tr>
                <tr>
                  <td>Nationality</td>
                  <td colspan="2">None</td>
                </tr>
                <tr>
                  <td>Date of birth</td>
                  <td colspan="2">1988-09-19</td>
                </tr>
                <tr>
                  <td>Membership Password</td>
                  <td>**********</td>
                  <td>
                    <v-btn x-small block outlined>Update</v-btn>
                  </td>
                </tr>
                <tr>
                  <td>Title</td>
                  <td>+447771111714</td>
                  <td>
                    <v-btn x-small block outlined>Request Update</v-btn>
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>anas@houseofborse.com</td>
                  <td>
                    <v-btn x-small block outlined>Request Update</v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-title>Address Information</v-card-title>
        <v-card-text>
          <v-simple-table dense class="secondary">
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>Country of Residence</td>
                  <td>United Kingdom</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>London</td>
                </tr>
                <tr>
                  <td>Full Address</td>
                  <td>33 CAVENDISH SQUARE</td>
                </tr>
                <tr>
                  <td>Zip/Postal code</td>
                  <td>W1S 1JB</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn x-small dense outlined>Request Update</v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-title>Bank Information</v-card-title>
        <v-list class="transparent">
          <v-list-item>
            <v-list-item-avatar color="secondaryBackground">
              <v-icon>mdi-bank</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Al-Rajhi Bank</v-list-item-title>
              <v-list-item-subtitle>2 month ago</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon><v-icon color="red">mdi-delete</v-icon></v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn x-small dense outlined @click="dialogBank = true"
            >Request New</v-btn
          >
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-title> Upload documents </v-card-title>
        <v-list class="transparent">
          <v-list-item>
            <v-list-item-avatar>
              <v-icon class="grey lighten-1">mdi-clipboard-text </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Identification</v-list-item-title>
              <v-list-item-subtitle
                >Passport , Driving licence , Residence ID</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-avatar>
              <v-icon class="grey lighten-1"> mdi-clipboard-text </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Proof of residence</v-list-item-title>
              <v-list-item-subtitle
                >Residence ID , Utility Bill , Bank
                Statement</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn x-small dense outlined>Upload Documents</v-btn>
        </v-card-actions>
        <v-card-text>
          <v-alert class="info mt-5">
            Please note that under all circumstances it is client’s
            responsibility to safe guard the password and other login
            details.HOB will not take any responsibility in situation where a
            client has failed to take necessary steps to protect such details.
          </v-alert>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogBank" max-width="700">
      <v-card class="secondary">
        <v-card-title>
          <v-btn icon @click="dialogBank = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          Add New
          <v-spacer></v-spacer>
        </v-card-title>
        <v-divider class="mb-5"></v-divider>
        <v-card-text>
          <v-text-field
            outlined
            dense
            label="Beneficiary's Name"
          ></v-text-field>
          <v-text-field
            outlined
            dense
            label="Beneficiary's Bank Name"
          ></v-text-field>
          <v-textarea
            outlined
            dense
            label="Beneficiary's Bank Account Number"
          ></v-textarea>
          <v-text-field outlined dense label="Swift Code"></v-text-field>
          <v-text-field outlined dense label="IBAN Number"></v-text-field>
          <v-text-field
            outlined
            dense
            label="Branch Name Of Beneficiary's Bank"
          ></v-text-field>
          <v-text-field
            outlined
            dense
            label="Address Of Beneficiary's Bank"
          ></v-text-field>
          <v-btn class="primary" block text>Save</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialog: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      dialogBank: false,
    };
  },
};
</script>

<style>
</style>