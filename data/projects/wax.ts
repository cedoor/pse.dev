import { ProjectInterface } from "@/lib/types"

export const wax: ProjectInterface = {
  id: "wax",
  section: "pse",
  projectStatus: "active",
  image: "wax.webp",
  name: "Wallet Account eXperiments - WAX",
  links: {
    github: "https://github.com/getwax",
    website: "https://wax.pse.dev/",
    discord: "https://discord.gg/hGDmAhcRyz",
  },
  tags: {
    builtWith: [
      "foundry",
      "hardhat",
      "node",
      "solidity bls library",
      "sqlite",
      "docker",
      "ethers",
      "deno",
    ],
    keywords: ["Scaling", "Key management", "WAX"],
    themes: ["build"],
    types: ["Prototype", "Proof of concept", "Lego sets/toolkits"],
  },
}
