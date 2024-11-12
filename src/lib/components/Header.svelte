<script lang="ts">
 import logo from '$lib/assets/logo.png';
 import { ChevronDown } from "lucide-svelte"
</script>

<div class="bg-[#910508] text-white h-40">
    <div class="flex justify-center py-2">
        <img src={logo} alt="logo" class="h-20"/>
    </div>
    <div class="flex justify-center py-2">
        <!-- 
        Home
        About us
        Patients & Visitors
        Clinical Services
        Specialist Doctors
        College of health services
        Research
        Other Services
        News & Media
        Careers
         -->
        <ul class="flex gap-4 p-2 text-base font-light text-[#D8DFE1] justify-center items-center">
            <li class=""><a href="#">Home</a></li>
            <li class=""><a href="#">About us</a></li>
            <li class="relative inline-block dropdown">
                <a href="#" class="flex gap-1">
                    <span>
                        Patients & Visitors
                    </span> 
                    <span>
                        <ChevronDown/>
                    </span>
                </a>
                <ul class="absolute text-gray-700 bg-white border rounded shadow-md dropdown-menu top-8 w-[300px]">
                    <li class=""><a class="block px-4 py-2 whitespace-no-wrap bg-white  hover:bg-[#D8DFE1]" href="#">One</a></li>
                    <li class=""><a class="block px-4 py-2 whitespace-no-wrap bg-white hover:bg-[#D8DFE1]" href="#">Two</a></li>
                    <li class=""><a class="block px-4 py-2 whitespace-no-wrap bg-white rounded-b hover:bg-[#D8DFE1]" href="#">Three is the magic number</a></li>
                </ul>
            </li>
            <li class=""><a href="#">Clinical Services</a></li>
            <li class=""><a href="#">Specialist Doctors</a></li>
            <li class=""><a href="#">College of health services</a></li>
            <li class=""><a href="#">Research</a></li>
            <li class=""><a href="#">Other Services</a></li>
            <li class=""><a href="#">News & Media</a></li>
            <li class=""><a href="#">Careers</a></li>
        </ul>
    </div>
</div>