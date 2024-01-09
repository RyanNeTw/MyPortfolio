<script setup>
import { Link } from '@inertiajs/vue3';
import { defineProps } from 'vue'
import PlaySvg from '../../Components/assests/PlaySvg.vue'
import MusciLayout from '../../Layouts/MusicLayout.vue'

const props = defineProps({
    tracks: Array
});

console.log(props.tracks)
const imageUrl = "https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs=w240-h480-rw"

</script>


<template>
    <div class="bg-zinc-900 flex flex-col gap-12 pb-12">
        <MusciLayout>
            <template #content>
                <div class="px-32 flex flex-col gap-4">
                    <div class="flex flex-row justify-between">
                        <h1 class="text-2xl text-white">Musique</h1>
                        <Link href="/track/create" class="text-sm text-white hover:underline">Créer une musique</Link>
                    </div>
                    <ul class="flex flex-wrap gap-8 w-screen min-h-screen">
                        <li v-for="track in tracks" :key="track.uuid" class="bg-zinc-950 hover:scale-110 transition hover:cursor-pointer rounded-lg w-1/5 p-4 flex flex-col gap-2 group">
                            <div class="w-full h-48 bg-no-repeat bg-cover bg-center relative overflow-hidden"  :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
                                <div class="hidden absolute bottom-2 right-2 hidden group-hover:flex transition hover:opacity-80">
                                    <PlaySvg />
                                </div>
                            </div>
                            <div>
                                <h1 class="text-zinc-50"> {{ track.title }}</h1>
                                <h1 class="text-sm text-zinc-200 hover:underline"> {{ track.artist }}</h1>
                            </div>
                        </li>
                    </ul>
                </div>
            </template>
        </MusciLayout>
    </div>
</template>