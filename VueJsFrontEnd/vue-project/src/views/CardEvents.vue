<template>
  <v-container>
    <h2>Upcoming Events</h2>
    <v-row>
      <v-col v-for="event in events" :key="event.id" cols="12" sm="6" md="4" lg="3">
        <v-card class="event-card">
          <v-card-title>{{ event.title }}</v-card-title>
          <v-card-subtitle>{{ event.date }}</v-card-subtitle>
          <v-card-text>
            {{ event.description }}
          </v-card-text>
          <v-card-actions>
            <div class="price">{{ event.price }}</div>
            <v-spacer></v-spacer>
            <v-btn color="primary">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CardEvents',
  data() {
    return {
      events: [
        {
          id: 1,
          title: 'Event 1',
          date: 'May 1, 2023',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          price: '$50'
        },
        {
          id: 2,
          title: 'Event 2',
          date: 'June 1, 2023',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          price: '$100'
        },
        {
          id: 3,
          title: 'Event 3',
          date: 'July 1, 2023',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          price: '$75'
        }
      ]
    }
  }
}
</script>

<style scoped>
.event-card {
  margin: 16px;
}
.price {
  font-weight: bold;
}
</style>
