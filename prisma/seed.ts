import prisma from "../src/lib/db"

async function main() {
  const plans = [
    {
      name: 'Free',
      price: 0,
      maxProjects: 1,
      maxTestimonialsPerProject: 20,
    },
    {
      name: 'Basic',
      price: 999, 
      maxProjects: 3,
      maxTestimonialsPerProject: 10000,
    },
    {
      name: 'Pro',
      price: 2999, 
      maxProjects: 10,
      maxTestimonialsPerProject: 10000,
    },
  ]

  for (const plan of plans) {
    await prisma.plan.upsert({
      where: { name: plan.name },
      update: plan,
      create: plan,
    })
  }

  console.log('Seed data for plans has been added successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })