<template>
  <v-container class="d-flex align-start justify-center" fluid>
    <v-card height="90vh">
      <v-card-title class="text-h5">Лицензии</v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="licenses"
          item-key="id"
          class="elevation-1"
        >
          <template #top>
            <v-toolbar flat>
              <v-toolbar-title>Список лицензий</v-toolbar-title>
              <v-divider class="mx-4" inset vertical />
              <v-btn color="primary" @click="showAddLicenseDialog"
                >Добавить лицензию</v-btn
              >
            </v-toolbar>
          </template>
          <template #item.status="{ item }">
            <v-chip :color="item.status === 'Активна' ? 'green' : 'red'" dark>
              {{ item.status }}
            </v-chip>
          </template>
        </v-data-table>

        <v-dialog v-model="addLicenseDialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Добавить лицензию</span>
              <v-spacer></v-spacer>
              <v-btn icon @click="closeAddLicenseDialog">
                <v-icon :icon="mdiClose"></v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <v-form ref="addLicenseForm" v-model="valid">
                <v-text-field
                  v-model="newLicense.name"
                  :rules="nameRules"
                  label="Название лицензии"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="newLicense.type"
                  :rules="typeRules"
                  label="Тип лицензии"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="newLicense.authority"
                  :rules="authorityRules"
                  label="Выдающий орган"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="newLicense.issueDate"
                  label="Дата выдачи"
                  type="date"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="newLicense.expirationDate"
                  label="Дата окончания"
                  type="date"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="newLicense.renewalDate"
                  label="Дата продления"
                  type="date"
                ></v-text-field>
                <v-text-field
                  v-model="newLicense.licenseNumber"
                  label="Номер лицензии"
                  required
                ></v-text-field>
                <v-textarea
                  v-model="newLicense.description"
                  label="Описание"
                  rows="3"
                ></v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                @click="submitAddLicense"
                :disabled="!valid"
                >Добавить</v-btn
              >
              <v-btn @click="closeAddLicenseDialog">Отмена</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mdiClose } from "@quasar/extras/mdi-v7";
import * as anchor from "@project-serum/anchor";
// import { Wallet as AnchorWallet } from "@project-serum/anchor";
import { Connection, Keypair, PublicKey, SystemProgram } from "@solana/web3.js";
import idl from "../idl.json";
// import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";
// import { Wallet } from "@project-serum/anchor";

export default {
  name: "licenses-page",
  data() {
    const licenses = JSON.parse(localStorage.getItem("licences") || "[]");
    return {
      headers: [
        { title: "ID лицензии", value: "id" },
        { title: "Название лицензии", value: "name" },
        { title: "Тип лицензии", value: "type" },
        { title: "Выдающий орган", value: "authority" },
        { title: "Дата выдачи", value: "issueDate" },
        { title: "Дата окончания", value: "expirationDate" },
        { title: "Статус", value: "status" },
        { title: "Дата продления", value: "renewalDate" },
        { title: "Номер лицензии", value: "licenseNumber" },
        { title: "Описание", value: "description" },
      ],
      licenses,
      addLicenseDialog: false,
      valid: false,
      newLicense: {
        name: "test",
        type: "test",
        authority: "test",
        issueDate: "",
        expirationDate: "",
        renewalDate: "",
        licenseNumber: "123",
        description: "test",
      },
      nameRules: [(v) => !!v || "Название лицензии обязательно"],
      typeRules: [(v) => !!v || "Тип лицензии обязателен"],
      authorityRules: [(v) => !!v || "Выдающий орган обязателен"],
    };
  },
  computed: {
    mdiClose() {
      return mdiClose;
    },
  },
  methods: {
    showAddLicenseDialog() {
      this.addLicenseDialog = true;
    },
    closeAddLicenseDialog() {
      this.addLicenseDialog = false;
      this.resetNewLicense();
    },
    resetNewLicense() {
      this.newLicense = {
        name: "",
        type: "",
        authority: "",
        issueDate: "",
        expirationDate: "",
        renewalDate: "",
        licenseNumber: "",
        description: "",
      };
    },
    async connectWallet() {
      if (window.solana && window.solana.isPhantom) {
        try {
          const response = await window.solana.connect();
          console.log("Connected to wallet:", response.publicKey.toString());
        } catch (err) {
          console.error("Connection error:", err);
        }
      } else {
        console.log("Phantom wallet not found");
      }
    },
    async submitAddLicense() {
      try {
        await this.connectWallet();

        console.log("Adding license to Solana blockchain:", this.newLicense);

        // Load the keypair and provider
        const PROGRAM_ID = new PublicKey(
          "DLsDUMKHpojJ6NxDJfqFaAGQo2Sx6Do7NL4wNYTqxmnA",
        );
        console.log(1);
        const KEYPAIR_PATH = "/program-keypair.json";
        const walletKeypair = Keypair.fromSecretKey(
          Uint8Array.from([
            160, 195, 249, 245, 15, 9, 172, 103, 242, 178, 250, 117, 250, 85,
            159, 144, 10, 77, 249, 110, 110, 9, 217, 72, 211, 255, 43, 187, 36,
            76, 212, 22, 178, 120, 102, 48, 186, 170, 74, 80, 250, 176, 212, 43,
            196, 241, 222, 58, 14, 61, 182, 149, 83, 45, 241, 74, 255, 142, 21,
            99, 42, 112, 202, 19,
          ]),
        );

        console.log(2);
        const connection = new Connection(
          "https://api.devnet.solana.com",
          "confirmed",
        );
        const wallet = {
          publicKey: walletKeypair.publicKey,
          signTransaction: async (transaction) => {
            transaction.partialSign(walletKeypair);
            return transaction;
          },
          signAllTransactions: async (transactions) => {
            transactions.forEach((transaction) =>
              transaction.partialSign(walletKeypair),
            );
            return transactions;
          },
        };

        const provider = new anchor.AnchorProvider(
          connection,
          {
            publicKey: walletKeypair.publicKey,
            signTransaction: async (transaction) => {
              transaction.partialSign(walletKeypair);
              return transaction;
            },
            signAllTransactions: async (transactions) => {
              transactions.forEach((transaction) =>
                transaction.partialSign(walletKeypair),
              );
              return transactions;
            },
          },
          {},
        );
        anchor.setProvider(provider);

        // Load the IDL and program
        const program = new anchor.Program(
          idl,
          PROGRAM_ID,
          anchor.getProvider(),
        );

        // Create a new account for the license data
        const licenseAccount = anchor.web3.Keypair.generate();

        // Format license data
        const licenseData = {
          id: (this.licenses.length + 1).toString(),
          name: this.newLicense.name,
          licenseType: this.newLicense.type,
          authority: this.newLicense.authority,
          issueDate: new anchor.BN(
            new Date(this.newLicense.issueDate).getTime(),
          ),
          expirationDate: new anchor.BN(
            new Date(this.newLicense.expirationDate).getTime(),
          ),
          status: "Активна",
          renewalDate: new anchor.BN(
            new Date(this.newLicense.renewalDate).getTime(),
          ),
          licenseNumber: this.newLicense.licenseNumber,
          description: this.newLicense.description,
        };

        console.log("saving");
        // Call the save_license function on the Solana program
        await program.rpc.saveLicense(
          licenseData.id,
          licenseData.name,
          licenseData.licenseType,
          licenseData.authority,
          licenseData.issueDate,
          licenseData.expirationDate,
          licenseData.status,
          licenseData.renewalDate,
          licenseData.licenseNumber,
          licenseData.description,
          {
            accounts: {
              license: licenseAccount.publicKey,
              user: wallet.publicKey,
              systemProgram: SystemProgram.programId,
            },
            signers: [licenseAccount],
          },
        );

        // Update local state with the new license
        this.licenses.push({
          ...this.newLicense,
          id: licenseData.id,
          status: "Активна",
        });

        localStorage.setItem("licences", JSON.stringify(this.licenses));
        this.closeAddLicenseDialog();
        console.log(
          "License saved successfully:",
          licenseAccount.publicKey.toBase58(),
        );
      } catch (error) {
        console.error("Error adding license to Solana blockchain:", error);
      }
    },
  },
};
</script>

<style scoped>
.v-container {
  margin-top: 20px;
}
</style>
