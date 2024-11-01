import * as anchor from "@project-serum/anchor";
import { Connection, PublicKey, SystemProgram, Keypair } from "@solana/web3.js";
import { default as BN } from "bn.js";
import { readFileSync } from "fs";
import * as dotenv from "dotenv";
dotenv.config();

// Load environment variables
const PROGRAM_ID = new PublicKey(process.env.PROGRAM_ID as string);
const KEYPAIR_PATH = process.env.KEYPAIR_PATH as string;
const WALLET_KEYPAIR = process.env.ANCHOR_WALLET as string;

// Set up the connection to the Solana Devnet
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// Load the wallet keypair from the specified path
const walletKeypair = Keypair.fromSecretKey(
  Uint8Array.from(JSON.parse(readFileSync(WALLET_KEYPAIR, "utf-8"))),
);

const wallet = new anchor.Wallet(walletKeypair);
anchor.setProvider(new anchor.AnchorProvider(connection, wallet, {}));

// Load the IDL
const idl = JSON.parse(readFileSync("./idl.json", "utf8"));
const program = new anchor.Program(idl, PROGRAM_ID, anchor.getProvider());

async function main() {
  // Generate a new account for the license data
  const licenseAccount = anchor.web3.Keypair.generate();
  const issueDate = new BN(Date.now());
  const expirationDat = new BN(Date.now() + 31536000000);
  const renewalDate = new BN(Date.now() + 31536000000);

  // Define license data (sample values; replace as needed)
  const licenseData = {
    id: "1",
    name: "Business License",
    licenseType: "Type A",
    authority: "Gov Authority",
    issueDate: issueDate,
    expirationDate: expirationDat, // 1 year later
    status: "Active",
    renewalDate: renewalDate,
    licenseNumber: "12345",
    description: "This is a sample license",
  };

  // Call the save_license function
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

  console.log(
    "License saved successfully:",
    licenseAccount.publicKey.toBase58(),
  );
}

// Run the script
main().catch(console.error);
